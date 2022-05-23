import Experience from "./experience";
import IntroInicio from "./introInicio/index.js";
import Project from "./project";
import Skills from "./skills";
import "./style.css"
export default function AlterarPortfolio(){

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
                    <Project/>
                </li>
                <li>
                  <IntroInicio/>
                </li>
                
            </ul>
        </section>
    )
}