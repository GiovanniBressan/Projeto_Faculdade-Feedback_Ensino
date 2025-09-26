
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className={style.menuMain}>
      <div className={style.menuGrid}>
        {/* ...  Links ... */}
        <Link to="/avaliar-aluno" className={style.menuCard}>
          Avaliação dos Aluno
        </Link>

        <Link to="/avaliar-professor" className={style.menuCard}>
          Avaliação dos Professores
        </Link>

        <Link to="/feedbacks-recebidos" className={style.menuCard}>
          Feedbacks Recebidos dos Alunos e Professores
        </Link>
      </div>
    </main>
  );
}
