import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import api from "../../services/api"
import { logout } from "../../services/auth"

export function PrivateRoute({children, redirectTo}) {
    const [auth,setAuth] = useState()

    const verify = async () => {
        const token = localStorage.getItem('token');
   
        if (token) {
            await api.get('/session/verify',  {
                headers: {
                    authorization: `bearer ${token}`,
                }})
                .then((response)=>{
                return setAuth(response.data.token)
                })
                .catch(() => {
                    logout()
                    return setAuth(false)
                })
        } else {
        
            return false
    
        }
    }

    useEffect( ()=>{
        verify()
    },[])


    const checkLocalStorage = () => {
        if (localStorage.getItem('token')) {
            verify()
        }
    }


    useEffect(() => {
        window.addEventListener("storage", checkLocalStorage)

        return () => {
            
            window.removeEventListener("storage", checkLocalStorage)
        }
        // eslint-disable-next-line
    }, [])

    switch (auth) {
        case true:
            return children
            
        case false:
            return <Navigate to={redirectTo} />
    
        default:
            return <div className="BoxNull"><h2>Carregando...</h2></div>
    }
  
}