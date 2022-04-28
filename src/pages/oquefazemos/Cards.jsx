import HTMLReactParser from 'html-react-parser'

export default function Cards(props) {
  return (
    <div className="divCard">
      <div className="card">
        <img className="imgCard" src={props.img} alt="Imagem card" />
        <p className={props.className}>
         {HTMLReactParser(props.texto)}
        </p>
      </div>
    </div>
  );
}
