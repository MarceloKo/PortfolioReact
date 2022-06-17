
import './style.css'
import '../../global.css'
import banner from '../../assets/banner.png'
import Buttom from "../../components/buttom";
import useDetails from '../../store/storeDetails';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading';

export default function Inicio() {
  const introInicio = useDetails((state) => state.introInicio);
  return (
    <>
      <section id="sectionintro" className="container-content animate__animated animate__fadeIn animate__faster">
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
          <Link to={'/sobre'}><Buttom style={{ width: '150px' }}>Sobre mim</Buttom></Link>
        </div>
        
        <div className="effect effect-4"></div>

        <div id="banner">
          <img src={banner} alt="banner" />
        </div>
      </section>

      <section id="sectionbox" className="container-content animate__animated animate__fadeIn">
        <h2>UMA BREVE INTRODUÇÃO SOBRE MIM</h2>
        <div id="box">
          <p>{!introInicio && <Loading size="30px"/>}</p>
          <p dangerouslySetInnerHTML={ { __html: introInicio } }></p>
          
        </div>

      </section>

    </>
  );
}