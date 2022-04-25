import './style.css'
import firstPortfolio from "../../assets/projects/firstPortfolio.png"
export default function Projetos (){
    return(
        <section id="section" className='container-content'>
            <div id="headerproject">
                <h1>Projetos</h1>
                <p>Todos projetos realizados no decorrer da minha trajetória.</p>
            </div>
            <div id="bodyprojects">
               
                    <ul>
                        <li> 
                            <img src={firstPortfolio} alt="portfolio"/>
                            <h2>Projeto 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                        </li>
         
                        <li> 
                            <img src={firstPortfolio} alt="portfolio"/>
                            <h2>Projeto 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                        </li>
                        <li> 
                            <img src={firstPortfolio} alt="portfolio"/>
                            <h2>Projeto 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                        </li>
                        <li> 
                            <img src={firstPortfolio} alt="portfolio"/>
                            <h2>Projeto 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidemsit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                        </li>
                    </ul>
               
               

            </div>
        </section>
    )
}