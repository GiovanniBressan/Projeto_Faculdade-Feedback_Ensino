// src/Components/FeedbackList/FeedbackList.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css"; // Criaremos este arquivo a seguir

const API_URL = "http://localhost:3001/api/feedbacks";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterTo, setFilterTo] = useState("");

  // Efeito para carregar os dados do backend
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(API_URL);
        setFeedbacks(response.data);
      } catch (err) {
        setError(
          "Falha ao carregar os feedbacks. Verifique o servidor backend."
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []); // Array vazio garante que o efeito rode apenas uma vez

  // Lógica de filtragem: filtra o array de feedbacks
  const filteredFeedbacks = feedbacks.filter((feedback) => {
    // Filtrar por Categoria (Positivo, Negativo, etc.)
    const categoryMatch = filterCategory
      ? feedback.category === filterCategory
      : true;

    // Filtrar por Destinatário (aluno ou professor)
    const toMatch = filterTo ? feedback.to === filterTo : true;

    return categoryMatch && toMatch;
  });

  if (loading) {
    return <div className={style.loading}>Carregando feedbacks...</div>;
  }

  if (error) {
    return <div className={style.error}>{error}</div>;
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Feedbacks Recebidos ({feedbacks.length})</h2>

      {/* Controles de Filtro */}
      <div className={style.filters}>
        {/* Filtro por Destinatário */}
        <select value={filterTo} onChange={(e) => setFilterTo(e.target.value)}>
          <option value="">Destinatário (Todos)</option>
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
        </select>

        {/* Filtro por Categoria */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Categoria (Todas)</option>
          <option value="positivo">Positivo</option>
          <option value="construtivo">Construtivo</option>
          <option value="negativo">Negativo</option>
          <option value="pedagogico">Pedagógico</option>
        </select>
      </div>

      {/* Lista de Feedbacks */}
      <div className={style.list}>
        {filteredFeedbacks.length === 0 ? (
          <p className={style.noResults}>
            Nenhum feedback encontrado com os filtros aplicados.
          </p>
        ) : (
          filteredFeedbacks.map((fb) => (
            <div key={fb.id} className={style.card}>
              <p className={style.cardHeader}>
                **{fb.category.toUpperCase()}** - Para: {fb.to.toUpperCase()}
              </p>
              <p className={style.cardBody}>{fb.message}</p>
              <p className={style.cardFooter}>
                Enviado por: {fb.from} em{" "}
                {new Date(fb.timestamp).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
