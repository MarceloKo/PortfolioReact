import './style.css'
import useDetails from '../../store/storeDetails'
import Loading from '../../components/loading'
export default function Projetos (){
    const projetos = useDetails((state) => state.projetos)
    return(
        <>
        <section id="section" className='container-content animate__animated animate__fadeIn animate__faster'>
            <div id="headerproject">
                <h1>Projetos</h1>
                <p>Todos projetos realizados no decorrer da minha trajetória.</p>
            </div>
            <div id="bodyprojects">
               
                    <ul>
                      
                        {projetos.length >0 ? projetos.map((projeto)=> 
                        <li key={projeto.title}> 
                            <img src={projeto.imgUrl} alt={projeto.title}/>
                            <h2>{projeto.title}</h2>
                            <p>{projeto.description}</p>
                        </li> ) : <p style={{margin:"auto"}}><Loading size="30px"/></p>}
                       
         
                       

                    </ul>
               
               

            </div>
        </section>
        </>
    )
}