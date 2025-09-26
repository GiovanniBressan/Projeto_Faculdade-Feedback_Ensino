import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.css";

export default function Header() {
  const navigate = useNavigate(); // Hook para navegação programática

  const handleLogout = () => {
    console.log("Usuário deslogado! Redirecionando...");
    navigate("/");
  };

  return (
    <header className={style.headerContainer}>
      <div className={style.menu}>
        
        <nav className={style.listaNav}>
          {/* Link para a página inicial (o menu) */}
          <Link to="/" className={style.logoLink}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/194/935/non_2x/global-admin-icon-color-outline-vector.jpg"
              alt="Admin Logo"
              className={style.listagem1}
            />
          </Link>

          <button onClick={handleLogout} className={style.listagem}>
            Sair
          </button>
        </nav>
      </div>
    </header>
  );
}
