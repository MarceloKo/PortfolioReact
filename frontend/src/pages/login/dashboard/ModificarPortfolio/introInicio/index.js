import { useEffect, useState } from "react";
import api from "../../../../../services/api";
import { headers } from "../../../../../services/auth";

export default function IntroInicio() {
    const [openIntroInicio, setOpenIntroInicio] = useState({});
    const [intro, setIntro] = useState();
    const handleClick = () => {
        if (openIntroInicio.alt) {
            setOpenIntroInicio({ alt: false })
        } else { 
            setOpenIntroInicio({ alt: true }) 
        }
    }
    async function getIntro(){
        const response = await api.get('/details/get');
        setIntro(response.data[0]);
    }
    useEffect(() => {
        getIntro()
    },[])
    async function sendAltIntro(e){
        e.preventDefault();
        if(!intro.introInicio || !intro.introSobre){
            alert("Preencha todos os campos!");
        }
        const data = {
            _id: intro._id,
            introInicio: intro.introInicio,
            introSobre: intro.introSobre
        }
        await api.post('/details/update', data,headers)
        .then(() => {
            getIntro()
            alert("Alterado com sucesso!");
        })
        .catch((error) => {})
    }
return (
    <>
        <div className="titlePortfolioDashboard">Introdução inicio / sobre</div>
        <div className="ButtonDashboard">
            <button onClick={handleClick}>Alterar</button>
        </div>
       
        {openIntroInicio.alt && 
        <form className="formExpAdd" onSubmit={sendAltIntro}>
            <p>Introdução inicio</p>
            <textarea placeholder="Introdução inicio" name="introinicio" value={intro.introInicio} onChange={(e)=>{setIntro({...intro,introInicio:e.target.value})}}  />  
           
            <p>Introdução sobre</p>
            <textarea placeholder="Introdução sobre" name="introsobre" value={intro.introSobre} onChange={(e)=>{setIntro({...intro,introSobre:e.target.value})}}  />  
           
   
        <button type="submit">Alterar</button>

    </form>}
    </>
)
}