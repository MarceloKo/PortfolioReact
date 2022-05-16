import "./style.css"
import {HiDocumentReport} from "react-icons/hi"
import {IoIosExit} from "react-icons/io"
import {AiFillHome} from "react-icons/ai"
import  {Link, useNavigate}  from "react-router-dom"
import {BsPenFill} from "react-icons/bs"
import { logout } from "../../services/auth"

export default function Dashboard ({children}){
    const navigate = useNavigate()
    const handleClickLogout = () => {
        logout()
        navigate('/login')
    }
    return (
        <div className="containerDashboard">
            <div className="menuDashboard">
                <ul>
                    <li><Link to='/dashboard'><p><AiFillHome/> <span>Inicio</span></p></Link></li>
                    <li><Link to='/dashboard/alterarportfolio'><p><HiDocumentReport/><span> Portfólio</span></p></Link></li>
                    <li><Link to='/dashboard/blocodenotas'><p><BsPenFill/><span> Anotações</span></p></Link></li>
                </ul>
            </div>
            <section className="dashboard">
                <header className="headerDashboard">
                    <p>Olá, {localStorage.getItem('name_user')}.</p>
                    <p className="exit" onClick={handleClickLogout}><IoIosExit/>Sair</p>

                </header>
                <body className="bodyDashboard">
                    {children}
                </body>
            </section>
        </div>
    )
}