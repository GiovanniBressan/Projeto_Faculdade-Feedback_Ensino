import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./style.module.css";
import Header from "./Components/header/header";
import Main from "./Components/Text/menu";
import FeedbackForm from "./Components/Feedback/FeedbackForm";
import FeedbackList from "./Components/Feedback/FeedbackList"; 

function App() {
  return (
    <Router>
      <div className={style.appContainer}>
        <Header />
        <Routes>
          {/* Rota para a página inicial (o menu) */}
          <Route path="/" element={<Main />} />
          {/* Rotas para os formulários de feedback */}
          <Route
            path="/avaliar-aluno"
            element={<FeedbackForm type="aluno" />}
          />
          <Route
            path="/avaliar-professor"
            element={<FeedbackForm type="professor" />}
          />
          {/* Rota para a lista de feedbacks recebidos */}
          <Route path="/feedbacks-recebidos" element={<FeedbackList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
