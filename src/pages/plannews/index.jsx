import CardPlan from "./CardPlan";
import "./plannews.css";
import Planimg1 from "../../assets/img/imgplan1.png";
import Planimg2 from "../../assets/img/imgplan2.png";
import Planimg3 from "../../assets/img/imgplan3.png";
import Planimg4 from "../../assets/img/imgplan4.png";
import Planimg5 from "../../assets/img/imgplan5.png";
import Seta from "../../assets/img/seta.png";

export default function PlanNews() {
  return (
    <section className="container">
      <div className="divPlanTitulo">
        <span className="fundo">03.</span>
        <span className="frente">
          <p className="indice">/Plan News</p>
          <h1>/Cases Games</h1>
          <span className="cliqueBlog">
            <p className="cliqueSaiba">Clique aqui para ver todo o blog</p>
            <img
              className="newsSeta"
              src={Seta}
              alt="Imagem de uma seta para baixo"
            />
          </span>
        </span>
      </div>
      <div className="divPlanCards">
        <CardPlan
          img={Planimg1}
          grupo="SKA"
          titulo="Plan cria o novo site da SKA"
          texto="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor 
        elementum Nam fermentum mattis ligula vulputate bibendum..."
        />
        <CardPlan
          img={Planimg2}
          grupo="tintas killing"
          titulo="Plan cria novo site para Tintas Killing"
          texto="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor 
      elementum Nam fermentum mattis ligula vulputate bibendum..."
        />
        <CardPlan
          img={Planimg3}
          grupo="cargo br"
          titulo="Estamos desenvolvendo o novo site da CargoBR"
          texto="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor 
      elementum Nam ferment..."
        />
        <CardPlan
          img={Planimg4}
          grupo="xalingo"
          titulo="Clubinho Xalingo com novidades"
          texto="Curabitur vitae tellus volutpat, imperdiet est nec, efficitur mi. Cras 
        pellentesque ultricies diam at dictum. Cras pellentesque..."
        />
        <CardPlan
          img={Planimg5}
          grupo="aromatic"
          titulo="Novo site da Aromatic no ar"
          texto="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor 
      elementum Nam fermentum mattis ligula vulputate bibendum..."
        />
      </div>
    </section>
  );
}
