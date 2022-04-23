import Buttom from "../../components/buttom";

import image from '../../assets/profile-pic2.png'
import './style.css';
import '../../global.css'
import Portfolio from "../../components/portfolio";

export default function Sobre() {
  return (
    <Portfolio>
        <section id="sectionintro" className="container-content">
            <div id="introducao">
              <h1>Saiba quem eu sou</h1>
              <h3>Meu nome é Marcelo Kohlhase de Cuiabá - MT<br/>
                Sou um desenvolvedor junior que está cursando Faculdade de Engenharia da Computação. Estou atuando no mercado de trabalho desde janeiro de 2022 atuando como Full Stack.
              </h3>
              <Buttom style={{width:'150px'}}>Sobre mim</Buttom>
            </div>
    
            
            <div id="banner">
              <img src={image} alt="banner"/>
            </div> 
        </section>
       
    </Portfolio>
  );
}