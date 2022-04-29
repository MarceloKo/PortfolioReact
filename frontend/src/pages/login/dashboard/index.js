
import logo  from "../../../assets/logo2.png"
import "./style.css"
import {HiDocumentReport} from "react-icons/hi"
import {AiFillHome} from "react-icons/ai"
export default function Dashboard (){
    return (
        <>
            <div className="menuDashboard">
                <ul>
                    <li><AiFillHome/><p>Inicio</p></li>
                    <li><HiDocumentReport/><p>Relatórios</p></li>
                </ul>
            </div>
            <section className="dashboard">
                <header className="headerDashboard">
                    <p>Olá, Marcelo.</p>
                    <img src={logo} alt="Logo"/>
                </header>
                <body className="bodyDashboard">

                </body>
            </section>
        </>
    )
}