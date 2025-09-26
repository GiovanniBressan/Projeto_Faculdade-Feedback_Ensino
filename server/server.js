// server/server.js (VERSÃO FINAL E COMPLETA)

import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// --- Definição do __dirname para ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --- Fim da Definição ---

const app = express();
const PORT = 3001;
// Usa o __dirname corrigido
const FEEDBACKS_FILE = path.join(__dirname, "feedbacks.json");

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Lógica de Leitura e Escrita do JSON ---

function getFeedbacks() {
  try {
    const data = fs.readFileSync(FEEDBACKS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    // Se o arquivo não existir ou estiver vazio/corrompido, retorna um array vazio
    return [];
  }
}

function saveFeedbacks(feedbacks) {
  fs.writeFileSync(FEEDBACKS_FILE, JSON.stringify(feedbacks, null, 2), "utf8");
}

// --- Rota de Teste para o endereço Raiz ---
app.get("/", (req, res) => {
  // Retorna uma mensagem de status para confirmar que o servidor está vivo
  res.send(
    "Servidor de Feedback API está rodando! Use as rotas /api/feedback (POST) e /api/feedbacks (GET)."
  );
});

// --- Rota POST para Receber o Feedback ---

app.post("/api/feedback", (req, res) => {
  const newFeedback = req.body;

  if (!newFeedback || !newFeedback.message || !newFeedback.category) {
    return res.status(400).json({ error: "Dados do feedback incompletos." });
  }

  try {
    const feedbacks = getFeedbacks();
    const id = Date.now().toString();
    const feedbackToSave = { id, ...newFeedback };

    feedbacks.push(feedbackToSave);
    saveFeedbacks(feedbacks);

    console.log("Novo feedback salvo:", feedbackToSave);
    res.status(201).json({
      message: "Feedback salvo com sucesso!",
      feedback: feedbackToSave,
    });
  } catch (error) {
    console.error("Erro ao salvar feedback:", error);
    res
      .status(500)
      .json({ error: "Erro interno do servidor ao salvar feedback." });
  }
});

// --- NOVO: Rota GET para Listar os Feedbacks ---
app.get("/api/feedbacks", (req, res) => {
  try {
    const feedbacks = getFeedbacks();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar feedbacks." });
  }
});
// --- Fim da nova Rota GET ---

// --- Iniciar o Servidor ---

app.listen(PORT, () => {
  console.log(`Servidor de feedback rodando em http://localhost:${PORT}`);
});
