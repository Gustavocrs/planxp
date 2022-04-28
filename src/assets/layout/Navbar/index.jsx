import "./Navbar.css";
import Logo from "../../img/logo.png";
import Seta from "../../img/seta.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="divMenuLateral">
        <ul className="listaMenu">
          <li>
            <img className="logo" src={Logo} alt="Logo da Plan" />
          </li>
          <li>
            <span className="fundoItemMenu">01.</span>
            <Link to="/quemsomos" className="frenteItemMenu">
              /Quem somos
            </Link>
          </li>
          <li>
            <span className="fundoItemMenu">02.</span>
            <Link to="/oquefazemos" className="frenteItemMenu">
              /O que fazemos
            </Link>
          </li>
          <li>
            <span className="fundoItemMenu">03.</span>
            <Link to="/plannews" className="frenteItemMenu">
              /Plan News
            </Link>
          </li>
          <li>
            <span className="fundoItemMenu">04.</span>
            <Link to="/nossosclientes" className="frenteItemMenu">
              /Nossos clientes
            </Link>
          </li>
          <li>
            <span className="fundoItemMenu">05.</span>
            <Link to="/contato" className="frenteItemMenu">
              /Contato
            </Link>
          </li>
          <li className="alinhar">
            <span className="uItemMenu">Que tal inovar com a gente?</span>
            <img className="imgSetaNav" src={Seta} alt="seta" />
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
}
