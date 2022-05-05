import './style.css'
import firstPortfolio from "../../assets/projects/firstPortfolio.png"
import useDetails from '../../store/storeDetails'
export default function Projetos (){
    const projetos = useDetails((state) => state.projetos)
    return(
        <>
        <section id="section" className='container-content'>
            <div id="headerproject">
                <h1>Projetos</h1>
                <p>Todos projetos realizados no decorrer da minha trajetória.</p>
            </div>
            <div id="bodyprojects">
               
                    <ul>
                        {console.log(projetos)}
                        {projetos.length >0 ? projetos.map((projeto)=> 
                        <li> 
                            <img src={projeto.imgUrl} alt={projeto.title}/>
                            <h2>{projeto.title}</h2>
                            <p>{projeto.description}</p>
                        </li> ) : <p style={{margin:"auto"}}>Carregando...</p>}
                       
         
                       

                    </ul>
               
               

            </div>
        </section>
        </>
    )
}