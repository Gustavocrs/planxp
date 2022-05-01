import "./oquefazemos.css";

import Cards from "./Cards";
import Img1 from "../../assets/img/img1.png";
import Img2 from "../../assets/img/img2.png";
import Img3 from "../../assets/img/img3.png";
import Img4 from "../../assets/img/img4.png";
import Seta from "../../assets/img/seta.png";

export default function OqueFazemos() {
  return (
    <section className="secOquefazemos">
      <div className="divTexto">
        <span className="fundoZ">02.</span>
        <span className="frente">
          <p className="indice">/O que fazemos</p>
          <h1>/Games</h1>
        </span>
        
        <h2>Desenvolvimento de games digitais.</h2>
        <h3>
          Empresa especialista em desenvolvimento de games digitais e
          gamificação.
        </h3>
        <p className="texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          ultricies sollicitudin. Cras vehicula congue odio, quis lobortis leo
          gravida non. In ornare erat tortor, mattis sodales leo efficitur at.
          In hac habitasse platea dictumst. Quisque ante tortor, egestas a lorem
          a, tempor lacinia nisi.
        </p>
      </div>
      <div className="divCards">
        <Cards
          className="textoCard"
          img={Img1}
          texto="A <strong>PlanXP</strong> tem uma equipe qualificada para o 
          <strong>desenvolvimento de jogos digitais</strong> para <strong>dispositivos móveis</strong>
           (smartphones, tablets e afins)."
        />
        <Cards
          className="textoCard"
          img={Img2}
          texto="Desenvolvemos games para anunciar seus produtos e serviços, através da <strong>
          gamificação</strong> (aplicações que utilizam dinâmica de jogos para engajamento de usuários, 
            resolução de problemas e melhoria no aprendizado)."
        />
        <Cards
          className="textoCard"
          img={Img3}
          texto="Utilizamos as últimas tecnologias para a <strong>criação de games</strong>, 
          trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o 
          resultado que ele busca."
        />
        <Cards
          className="textoPlan"
          img={Img4}
          texto="Experimente inovar com a <strong>PlanXP</strong> para <strong>desenvolver os seus jogos 
          digitais!</strong><br><br><small>Entre em contato agora mesmo.</small>"
        />
      </div>
      
    </section>
  );
}
