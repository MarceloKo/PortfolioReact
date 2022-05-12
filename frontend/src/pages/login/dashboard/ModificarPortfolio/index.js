import { useState } from "react";
import Experience from "./experience";
import Skills from "./skills";
import "./style.css"
export default function AlterarPortfolio(){
    const [openIntroInicio, setOpenIntroInicio] = useState({});
    const [openIntroSobre, setOpenIntroSobre] = useState({});



    return (
        <section className="modifyPortfolio">
            <h1>Alterar Portfólio</h1>
            <ul>
                <li>
                    <Experience/>
                </li>

                <li>
                   <Skills/>
                </li>
                <li>
                    <div className="titlePortfolioDashboard">Introdução inicio</div>
                    <div className="ButtonDashboard">
                        <button onClick={()=> {if(openIntroInicio.alt){setOpenIntroInicio({alt:false})}else{setOpenIntroInicio({alt:true})}}}>Alterar</button>
                    </div>
                    {openIntroInicio.alt && <p>Alterar</p>}
                </li>
                <li>
                    <div className="titlePortfolioDashboard">Introdução sobre</div>
                    <div className="ButtonDashboard">
                        <button onClick={()=> {if(openIntroSobre.alt){setOpenIntroSobre({alt:false})}else{setOpenIntroSobre({alt:true})}}}>Alterar</button>
                     
                    </div>
                    {openIntroSobre.alt && <p>Alterar</p>}

                </li>
            </ul>
        </section>
    )
}