import "./style.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { login } from "../../services/auth"
import { BsArrowLeft } from "react-icons/bs"
import Loading from "../../components/loading"
// import Alert from "../../components/alert/alert"
export default function Login() {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    async function handleSubmitForm(e) {
        e.preventDefault()
        if (!loading) {
            setLoading(true)
            await api.post('/user/authenticate', data, { headers: { authorization: 'Bearer ' + localStorage.getItem("token") } }).then(
                response => {
                    login(response.data.token, response.data.user._id, response.data.user.name)
                    setLoading(false)
                    navigate("/dashboard")
                }
            )
                .catch(err => {
                    setError(true)
                    alert(err.response.data.error)
                    setLoading(false)
                })
        }


    }
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false)
            }, [1500])
        }
    }, [error])

    return (
        <div className="container ">
            <BsArrowLeft id="back" color='white' size={40} onClick={() => navigate("/")} />

            <div id="boxlogin" className="container-content " onSubmit={handleSubmitForm}>
                <h1>LOGIN</h1>
                <form id="formlogin">

                    <input type="text" name="text" id="text" placeholder="Usuário" onChange={(event) => { setData({ ...data, login: event.target.value }) }} />

                    <input type="password" name="password" id="password" placeholder="Senha" onChange={(event) => { setData({ ...data, password: event.target.value }) }} />
                    <button type="submit" id="btnlogin" className={error ? "animate__animated animate__shakeX" : ""}>{loading?<Loading/> :"Entrar"}</button>
                    
                </form>

            </div>


        </div>
    )
}