import style from "./style.module.css";
import Header from "./Components/header/header";
import Main from "./Components/Text/text";
import Footer from "./Components/Footer/footer";
import logoMain from "/Logo/Logo-main.svg";

function App() {
  return (
    <>
      <Header></Header>
      <section className={style.fundoBanner}>
        <div className={style.bannerLogo}>
          <div className={style.boxMain}>
            <img src={logoMain} className={style.logoMain} />
            <br />
            <span className={style.boxText}>Livre para aprender,</span>
            <br />
            <span className={style.boxTextSec}>Livre para crescer</span>
          </div>
        </div>
      </section>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
