// src/main.jsx (CORRIGIDO E COMPLETO)

import React, { StrictMode } from "react"; // ⚠️ CORREÇÃO: Importar 'React' e 'StrictMode'
import ReactDOM from "react-dom/client"; // ⚠️ CORREÇÃO: Usar a desestruturação correta do ReactDOM
import App from "./App.jsx";

// Importe seu arquivo CSS global (se houver, ex: import './index.css')

// ⚠️ CORREÇÃO: Usar o createRoot do ReactDOM, que foi importado
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
