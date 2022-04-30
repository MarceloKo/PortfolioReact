
import logo  from "../../../assets/logo2.png"
import "./style.css"
import {HiDocumentReport} from "react-icons/hi"
import {IoIosExit} from "react-icons/io"
import {AiFillHome} from "react-icons/ai"
import  {useNavigate}  from "react-router-dom"
import {logout} from "../../../services/auth"
export default function Dashboard (){
    const navigate = useNavigate()
    const handleClickLogout = () => {
        logout()
        navigate('/login')
    }
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
                    <p>Olá, {localStorage.getItem('name_user')}.</p>
                    <p className="exit" onClick={handleClickLogout}><IoIosExit/>Sair</p>

                </header>
                <body className="bodyDashboard">

                </body>
            </section>
        </>
    )
}