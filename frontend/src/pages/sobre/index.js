import Buttom from "../../components/buttom";
import image from '../../assets/profile-pic2.png'
import './style.css';
import '../../global.css'
import javascriptlogo from '../../assets/javascriptlogo.png'
import reactlogo from '../../assets/reactlogo.png'
import nodelogo from '../../assets/nodelogo.png'
import mongologo from '../../assets/mongologo.png'

export default function Sobre() {
  return (
    <>
        <section id="about" className="container-content">
            <div id="aboutme">
              <h1>Saiba quem <span>eu sou</span></h1>
              <p>Meu nome é Marcelo Kohlhase de Cuiabá - MT<br/>
                Sou um desenvolvedor junior que está cursando Faculdade de Engenharia da Computação. Estou atuando no mercado de trabalho desde janeiro de 2022 atuando como Full Stack.
              </p>
              <Buttom style={{width:'150px'}}>Projetos</Buttom>
            </div>
    
            
            <div id="banner">
              <img src={image} alt="banner"/>
            </div> 
        </section>
        <section id="aboutme" className="container-content">
          <center><h1><span>Skills</span> Profissional</h1></center>
          <div id="container-skill">
            <ul>
              <li><img src={javascriptlogo} alt='Javascript'/></li>
              <li><img src={reactlogo} alt='Javascript'/></li>
              <li><img src={nodelogo} alt='Javascript'/></li>
              <li><img src={mongologo} alt='Javascript'/></li>
            
            </ul>
          </div>
        </section>

        <section id="aboutme" className="container-content">
          <center><h1><span>Experiência</span> Profissional</h1></center>
          <div id="container-experience">
            <ul>
              <li >
                <div id="headerProfissional">
                  <h3>Desenvolvedor Full Stack - Júnior</h3>
                  <p>Rutech - Freelance</p>
                  <p>Janeiro de 2022 - Atualmente</p>
                </div>
                <div className="barraTransversal"></div>
                <div id="descriptionProfissional">
                  <p>Atuando como full stack na realização e elaboração de um marketplace, utilizando como ferramenta de desenvolvimento o React.Js, Next.js, Node js e MongoDB.</p>
                </div>
              </li>
              <li >
                <div id="headerProfissional">
                  <h3>Desenvolvedor Full Stack - Júnior</h3>
                  <p>SEMOB - Estágio</p>
                  <p>Abril de 2022 - Atualmente</p>
                </div>
                <div className="barraTransversal"></div>
                <div id="descriptionProfissional">
                  <p>Desenvolvendo um painel administrativo para a PMMT, tendo como tecnologias para 
                    desenvolvimento, React js, Node e Mysql utilizando Knex.</p>
                </div>
              </li>
            
             
            
            </ul>
          </div>
        </section>
       
    </>
  );
}