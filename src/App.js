import "./App.scss";
import { FaSearch } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa";
import Icon from "./components/Icons/Icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContentLoading from "./components/ContentLoading/ContentLoading";

function App() {
  return (
    <div className="admin">
      <header className="admin__header">
        <a href="#" className="logo">
          <h1>
            <FaIdBadge />
            BigDashboard
          </h1>
        </a>
      </header>
      <nav className="admin__nav">
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Painel
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Projeto
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Leads
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Campanhas
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Notificações
            </a>
          </li>
        </ul>
      </nav>
      <main className="admin__main">
        <div className="title">
          <div className="text_title_display">
            <h1 className="text_title">Painel</h1>
            <p className="text_description">As ultimas atualizações de hoje</p>
          </div>
          <div className="text_icons_display">
            <Icon>
              <FaSearch />
            </Icon>
            <Icon>
              <FaRegBookmark />
            </Icon>
          </div>
        </div>
        <div className="dashboard">
          <div className="dashboard__item">
            <div className="card" style={{ height: "200px" }}>
              <ContentLoading />
            </div>
          </div>
          <div className="dashboard__item">
            <div className="card" style={{ height: "200px" }}>
              <ContentLoading />
            </div>
          </div>
          <div className="dashboard__item dashboard__item--full">
            <div className="card">
              <div style={{ height: "220px", width: "450px" }}>
                <ContentLoading />
              </div>
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card">
              <Skeleton count={1} baseColor="#fff" height={20} />
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card">
              <Skeleton count={1} baseColor="#fff" height={20} />
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card">
              <Skeleton count={1} baseColor="#fff" height={20} />
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card">
              <Skeleton count={1} baseColor="#fff" height={20} />
            </div>
          </div>
        </div>
      </main>
      <aside>
        <h3>Tarefas de hoje</h3>
        <div className="cards_itens">
          <div
            className="card"
            style={{ height: "200px", width: "100%", marginBottom: "1rem" }}
          >
            <ContentLoading />
          </div>
          <div
            className="card"
            style={{ height: "200px", width: "100%", marginBottom: "1rem" }}
          >
            <ContentLoading />
          </div>
        </div>
        <h3>Projetos Recentes</h3>
        <div className="cards_itens">
          <div
            className="card"
            style={{ height: "200px", width: "100%", marginBottom: "1rem" }}
          >
            <ContentLoading />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
