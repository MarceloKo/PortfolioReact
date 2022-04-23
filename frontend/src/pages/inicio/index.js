
import './style.css'
import '../../global.css'
import banner from '../../assets/banner.png'
import Buttom from "../../components/buttom";
import Portfolio from '../../components/portfolio';
export default function Inicio() {
  return (
    <Portfolio >
        
        <section id="sectionintro" className="container-content">
            <div class="effect effect-2">
              <div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="effect effect-1"></div>
            <div id="introducao">
        
              <h3>Olá</h3>
              <h1>Eu sou o Marcelo</h1>
              <h3>Sou desenvolvedor junior, apaixonado por tecnologia e por programação.</h3>
              <Buttom style={{width:'150px'}}>Sobre mim</Buttom>
            </div>
            <div className="effect effect-4"></div>
            
            <div id="banner">
              <img src={banner} alt="banner"/>
            </div> 
        </section>

        <section id="sectionbox" className="container-content">
          <h2>UMA BREVE INTRODUÇÃO SOBRE MIM</h2>
          <div id="box">
            <p>Sou um programador junior que está buscando se aprofundar mais sobre programação. Desde o 
              ensino médio quando tive o primeiro contato com a programação, tive um grande interesse em conhecer mais profundamente, 
              para meio de didática utilizavamos a linguagem C, uma linguagem de baixo nivel, e sempre viviamos no console para realizar 
              testes do código. Agora estou atuando como Full stack em desenvolvimento de web sites com as tecnologias React e Node.</p>
          </div>
          
        </section>
        
    </Portfolio>
  );
}