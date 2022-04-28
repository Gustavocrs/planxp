import "./contato.css";

import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import Seta from "../../assets/img/seta.png";
import imgCaptcha from "../../assets/img/captcha.png";
import imgGrupoPlan from "../../assets/img/imgGrupoplan.png";
import imgFullup from "../../assets/img/imgFullup.png";
import logoContato from "../../assets/img/logoContato.png";


export default function Contato() {
  return (
    <section className="secContato">
      <form className="contatoForm">
        <span className="contatoFundo">05.</span>
        <span className="contatoFrente">
          <h1>/Contato</h1>
          <p className="contatoTexto">
            Gostou de saber mais sobre as inovações tecnológicas e também quer
            oferecer novas experiências aos seus clientes? Então entre em
            contato e marque um encontro real conosco para conversarmos sobre as
            infinitas possibilidades do mundo virtual.
          </p>
        </span>

        <label className="contatoTitulo" htmlFor="nome">
          Nome:<br></br>
          <input className="contatoInputNome" type="text" />
        </label>

        <span className="contatoDuo">
          <label className="contatoTitulo" htmlFor="email">
            E-mail:<br></br>
            <input className="contatoInputDuo" type="email" />
          </label>

          <label className="contatoTitulo" htmlFor="tel">
            Telefone:<br></br>
            <input className="contatoInputDuo" type="tel" />
          </label>

          <br></br>
        </span>
        <label className="contatoTitulo" htmlFor="mensagem">
          Mensagem:<br></br>
          <textarea
            className="contatoTextarea"
            name="mensagem"
            cols="30"
            rows="4"
          ></textarea>
        </label>

        <img className="contatoImg" src={imgCaptcha} alt="captcha" />
        <button className="contatoBtn" type="submit">
          Enviar
        </button>
      </form>

      <div className="sociais">
        <div className="sociaisCards">
          <h2>Siga-nos</h2>
          <p className="sociaisCardtexto">
            Fique sempre por dentro de todas as novidades da Plan XP e de todas
            as empresas do Grupo Plan Marketing.
          </p>
          <div className="sociaisCardimg">
            <FaFacebookF className="socialIcons" />
            <FaInstagram className="socialIcons" />
            <FaYoutube className="socialIcons" />
          </div>
        </div>

        <div className="sociaisCards">
          <h2>
            <MdLocationOn />
            /RS
          </h2>
          <p className="sociaisCardtexto">
            Rua Onze de Junho, 243 Novo Hamburgo / RS<br></br>
            Brasil<br></br>
            +55 51 98229.0400
          </p>
          <div className="sociaisCardimg">
            <p className="sociaisTextos">ver no google maps</p>
            <img className="socialSeta" src={Seta} alt="seta" />
          </div>
        </div>

        <div className="sociaisCards">
          <h2>
            <MdLocationOn />
            /SP
          </h2>
          <p className="sociaisCardtexto">
          Rua Ibijaú, 355/Sala 1309 <br></br>
          São Paulo / SP<br></br>
            Brasil<br></br>
            +55 51 98229.0400
          </p>
          <div className="sociaisCardimg">
            <p className="sociaisTextos">ver no google maps</p>
            <img className="socialSeta" src={Seta} alt="seta" />
          </div>
        </div>

        <div className="sociaisCards">
          <img className="sociaisImg" src={imgGrupoPlan} alt="Imagem grupo plan" />
          <p className="sociaisCardtexto">
          A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo.
          </p>
          <div className="sociaisCardimg">
            <p className="sociaisTextos">conheça</p>
            <img className="socialSeta" src={Seta} alt="seta" />
          </div>
        </div>

        <div className="sociaisCards">
          <img className="sociaisImg" src={logoContato} alt="Imagem grupo plan" />
          <p className="sociaisCardtexto">
          A Plan é especializada em realidade virtural, realidade aumentada e jogos.
          </p>
          <div className="sociaisCardimg">
            <p className="sociaisTextos">conheça</p>
            <img className="socialSeta" src={Seta} alt="seta" />
          </div>
        </div>

        <div className="sociaisCards">
          <img className="sociaisImg" src={imgFullup} alt="Imagem grupo plan" />
          <p className="sociaisCardtexto">
          A FullUp é uma agência especializada em branding, design e campanhas.
          </p>
          <div className="sociaisCardimg">
            <p className="sociaisTextos">conheça</p>
            <img className="socialSeta" src={Seta} alt="seta" />
          </div>
        </div>

      </div>
    </section>
  );
}
