import Seta from "../../assets/img/seta.png";

export default function CardPlan(props) {
  return (
    <div className="newsDivPlan">
      <img className="newsImg" src={props.img} alt="Imagem card Plan News" />
      <div className="newsDivTexto">
        <p className="newsGrupo">
          <mark>{props.grupo}</mark>
        </p>
        <h2 className="newsTitulo">{props.titulo}</h2>
        <p className="newsTexto">{props.texto}</p>
        <span className="newsSaiba">
          <p>Saiba Mais</p>
          <img className="newsSeta" src={Seta} alt="Imagem de uma seta para baixo" />
        </span>
      </div>
    </div>
  );
}
