
import './style.css'
import logo from "../../../assets/logo2.png"
import {AiOutlineHome,AiOutlineFundProjectionScreen} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {CgEnter} from "react-icons/cg"
import  {Link}  from 'react-router-dom'
import { useEffect } from 'react'
import api from '../../../services/api'
import useDetails from "../../../store/storeDetails"

export default function Header() {
    const setIntroInicio = useDetails((state)=>state.setIntroInicio)
    const setIntroSobre = useDetails((state)=>state.setIntroSobre)
    const setSkills = useDetails((state)=>state.setSkills)
    const setProjetos = useDetails((state)=>state.setProjetos)
    const setExperiencia = useDetails((state)=>state.setExperiencia)


    async function getDetails(){
       await api.get('/details/get').then((response)=>{

        setIntroInicio(response.data[0].introInicio)
        setIntroSobre(response.data[0].introSobre)
        setSkills(response.data[0].skills)
        setProjetos(response.data[0].projects)
        setExperiencia(response.data[0].experience)
       })
       return
    }
    useEffect(()=>{
            getDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
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

