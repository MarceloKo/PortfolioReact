import Buttom from "../../components/buttom";
import image from '../../assets/profile-pic2.png'
import './style.css';
import '../../global.css'
import useDetails from "../../store/storeDetails";

export default function Sobre() {
  const introSobre = useDetails((state) => state.introSobre);
  const skills = useDetails((state) => state.skills);
  const experiencia = useDetails((state) => state.experiencia);
  return (
    <>
        <section id="about" className="container-content">
            <div id="aboutme">
              <h1>Saiba quem <span>eu sou</span></h1>
              <p>Meu nome é Marcelo Kohlhase de Cuiabá - MT<br/>
              {introSobre ? introSobre : <>Carregando...</>}
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
              
              {skills.length > 0 ? skills.map((skill) => <li key={skill.language}><img src={skill.imgUrl} alt={skill.language}/></li> ): <p style={{margin:"auto"}}>Carregando...</p>}

            
            </ul>
          </div>
        </section>

        <section id="aboutme" className="container-content">
          <center><h1><span>Experiência</span> Profissional</h1></center>
          <div id="container-experience">
            <ul>
              {console.log(skills)}
              {experiencia.length >0 ? experiencia.map((experience)=>  
              <li key={experience._id}>
                <div id="headerProfissional">
                  <h3>{experience.occupation}</h3>
                  <p>{experience.company} - {experience.contract}</p>
                  <p>{experience.dateInitial} - {experience.dateEnd}</p>
                </div>
                <div className="barraTransversal"></div>
                <div id="descriptionProfissional">
                  <p>{experience.description}</p>
                </div>
              </li>) : <p style={{margin:"auto"}}>Carregando...</p>}
             
            </ul>
          </div>
        </section>
       
    </>
  );
}