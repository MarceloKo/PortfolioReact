import "./style.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
export default function Login (){
    const [data,setData] = useState({})
    const navigate = useNavigate()
    function handleSubmitForm(e){
        e.preventDefault()
        console.log(data)
        
        navigate("/dashboard")
    }
    return(
        <div className="container ">
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