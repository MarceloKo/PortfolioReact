
import './style.css'
import '../../global.css'
import banner from '../../assets/banner.png'
import Buttom from "../../components/buttom";
import useDetails from '../../store/storeDetails';
export default function Inicio() {
  const introInicio = useDetails((state) => state.introInicio);
  return (
    <>
        <section id="sectionintro" className="container-content">
            <div className="effect effect-2">
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
              <h1>Eu sou o <span>Marcelo</span></h1>
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
            <p>{introInicio ? introInicio : <p>Carregando...</p>}</p>
          </div>
          
        </section>
        
    </>
  );
}