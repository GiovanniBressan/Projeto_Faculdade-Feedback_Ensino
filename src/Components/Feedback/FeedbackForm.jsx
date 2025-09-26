
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css"; 
import axios from "axios";

const FeedbackForm = ({ type }) => {
  const navigate = useNavigate(); // Hook para navegação
  const [formData, setFormData] = useState({
    category: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      ...formData,
      from: "id_do_usuario_logado", // Ex: 12345
      role: "professor", // Ex: 'professor' ou 'aluno'
      to: type,
      timestamp: new Date().toISOString(),
    };

    try {
      
      const response = await axios.post(
        "http://localhost:3001/api/feedback",
        feedbackData
      );

      alert(response.data.message);

      // Limpa o formulário após o sucesso
      setFormData({ category: "", message: "" });

      // Navega de volta para a página inicial
      navigate("/");
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
      alert("Erro ao enviar feedback. Tente novamente.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formTitle = type === "aluno" ? "Avaliar Aluno" : "Avaliar Professor";

  return (
    <div className={style.container}>
      <h2 className={style.title}>{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo de Categoria (Tipo de Feedback) */}
        <div className={style.formGroup}>
          <label htmlFor="category">Tipo de Feedback:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecione...</option>
            <option value="positivo">Positivo</option>
            <option value="construtivo">Construtivo</option>
            <option value="negativo">Negativo</option>
            <option value="pedagogico">Pedagógico</option>
          </select>
        </div>

        {/* Campo de Mensagem */}
        <div className={style.formGroup}>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={`Escreva seu feedback sobre o ${type} aqui...`}
            required
          />
        </div>

        <button type="submit">Enviar Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
