import "./style.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import api from "../../services/api"
import { login } from "../../services/auth"
import {BsArrowLeft} from "react-icons/bs"
// import Alert from "../../components/alert/alert"
export default function Login (){
    const [data,setData] = useState({})
    const navigate = useNavigate()
    async function handleSubmitForm(e){
        e.preventDefault()
        await api.post('/user/authenticate',data).then(
            response => { 
                login(response.data.token,response.data.user._id,response.data.user.name)
                navigate("/dashboard")
            }
        )
        .catch(err => {
            alert(err.response.data.error)
        })
        
    }
    return(
        <div className="container ">
            <BsArrowLeft id="back" color='white' size={40} onClick={() => navigate("/") }/>

            <div id="boxlogin" className="container-content" onSubmit={handleSubmitForm}>
                    <h1>LOGIN</h1>
                    <form id="formlogin">
                        
                            <input type="text" name="text" id="text" placeholder="Usuário" onChange={(event)=> {setData({...data,login:event.target.value})}}/>

                            <input type="password" name="password" id="password" placeholder="Senha" onChange={(event)=> {setData({...data,password:event.target.value})}}/>
                            <button type="submit" id="btnlogin">Entrar</button>
                    </form>

            </div>
               
                        
        </div>
    )
}