import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style}>
      <div
        className={style.menu}
        style={{ transition: "all .5s", zIndex: "20" }}
      >
        <a href="/">
          <img
            src="/public/Logo/logo.svg"
            alt="Passo-Livre-Logo"
            className={style["logo-top"]}
          />
        </a>

        <nav>
          <ul className={style["lista-nav"]}>
            <div>
              <a href="/">
                <li className={style.listagem}>Home</li>
              </a>
            </div>
            <li className={style.listagem}>Quem Somos</li>
            <li className={style.listagem}>Atividades</li>
            <li className={style.listagem}>Contatos</li>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
}
