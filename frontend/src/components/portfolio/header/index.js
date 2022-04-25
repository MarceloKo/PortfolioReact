
import './style.css'
import logo from "../../../assets/logo2.png"
import {AiOutlineHome,AiOutlineFundProjectionScreen} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {CgEnter} from "react-icons/cg"
import  {Link}  from 'react-router-dom'
export default function Header() {
    return (
        <header id='header'>
            
            <img src={logo} alt='logo'/>
           
            
            <ul id='menu'>
                    <li><Link to="/"><AiOutlineHome/>Inicio</Link></li>
                    <li><Link to="/sobre"><BsPerson size={22}/>Sobre</Link></li>
                    <li><Link to="/projetos"><AiOutlineFundProjectionScreen/>Projetos</Link></li>
                    <li><Link to="/login"><CgEnter/>Login</Link></li>
            </ul>
           
        </header>
       
    )
}

