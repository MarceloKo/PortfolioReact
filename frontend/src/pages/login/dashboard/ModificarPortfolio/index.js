import { useEffect, useState } from "react";
import api from "../../../../services/api";
import "./style.css"
export default function AlterarPortfolio(){
    const [openExperience, setOpenExperience] = useState({});
    const [openSkill, setOpenSkill] = useState({});
    const [openIntroInicio, setOpenIntroInicio] = useState({});
    const [openIntroSobre, setOpenIntroSobre] = useState({});

    const [getExp,setGetExp] = useState([]);
    const [getExpAlt,setGetExpAlt] = useState();

    const getExperience = async () => {
        const response = await api.get('/experience/get')
        setGetExp(response.data.map(experience => {return {id: experience._id, value: experience.company}}))
    }


    const sendFormExp = async(e) => {
        e.preventDefault();  
        const data = {
            occupation:e.target.occupation.value,
            company:e.target.company.value,
            contract:e.target.contract.value,
            dateInitial:e.target.dateInitial.value,
            dateEnd:e.target.dateEnd.value,
            description:e.target.description.value,
        }
        if(!data.occupation || !data.company || !data.contract || !data.dateInitial || !data.dateEnd || !data.description){
            alert("Preencha todos os campos!");
        }
        await api.post('/experience/store', data)
        .then(()=>{
            alert("Experiência adicionada com sucesso!");
            e.target.reset()
        }).catch((error)=>{
            alert("Erro ao adicionar experiência!");
        })
        // Envia os dados para a API
       
    }
    const sendExcluirExp = async (e) => {
        e.preventDefault()
        if(!e.target.select.value){
            return alert("Selecione uma experiencia para excluir!")
        }
        await api.post('/experience/delete', {id: e.target.select.value})
        .then(()=>{
            alert("Experiência excluida com sucesso!")
            getExperience()
        }).catch((error)=>{
            alert(error.response.data.error)
        })
    }

    const selectedAltExp = async (e) => {
       const response = await api.post('/experience/getone', {id: e.target.value})
       setGetExpAlt(response.data)
    }

    const sendAltExp = async (e) => {
        e.preventDefault()
    }

    useEffect(()=>{
       getExperience()
    },[])

    return (
        <section className="modifyPortfolio">
            <h1>Alterar Portfólio</h1>
            <ul>
                <li>
                    <div className="titlePortfolioDashboard">Experiências</div>
                    <div className="ButtonDashboard">
                        <button onClick={()=> {if(openExperience.expAdd){setOpenExperience({expAdd:false})}else{setOpenExperience({expAdd:true})}}}>Adicionar</button>
                        <button onClick={()=> {if(openExperience.expExc){setOpenExperience({expExc:false})}else{setOpenExperience({expExc:true})}}}>Excluir</button>
                        <button onClick={()=> {if(openExperience.expAlt){setOpenExperience({expAlt:false})}else{setOpenExperience({expAlt:true})}}}>Alterar</button>
                    </div>
                    {openExperience.expAdd && 
                        <form onSubmit={sendFormExp} className="formExpAdd">
                            <div className="formRow">
                                <input placeholder="Ocupação" name="occupation"/>
                                <input placeholder="Empresa" name="company"/>
                            </div>
                           <div className="formRow">
                                <input placeholder="Data inicio" name="dateInitial"/>
                                <input placeholder="Data final" name="dateEnd"/>
                           </div>
                            <input placeholder="Contrato" name="contract"/>
                            <textarea placeholder="Descrição" name="description"/>

                            <button type="submit">Adicionar</button>
                        </form>
                    }

                    {openExperience.expExc && 
                        <form className="formExpAdd" onSubmit={sendExcluirExp}>
                            <select name="select">
                                <option value="">Selecione uma experiência</option>
                                {getExp.map(exp => <option value={exp.id} key={exp.id}>{exp.value}</option>)}
                            </select>
                            <button type="submit">Excluir</button>

                        </form>
                    }
                    {openExperience.expAlt && 
                        <>
                            <form className="formExpAdd" onSubmit={sendAltExp}>
                                <select name="selected" onChange={selectedAltExp}>
                                    <option value="">Selecione uma experiência</option>
                                    {getExp.map(exp => <option value={exp.id} key={exp.id}>{exp.value}</option>)}
                                </select>
                                {getExpAlt &&
                                <>  
                                    <div className="formRow">
                                        <input placeholder="Ocupação" name="occupation"/>
                                        <input placeholder="Empresa" name="company"/>
                                    </div>
                                    <div className="formRow">
                                        <input placeholder="Data inicio" name="dateInitial"/>
                                        <input placeholder="Data final" name="dateEnd"/>
                                    </div>
                                    <input placeholder="Contrato" name="contract"/>
                                    <textarea placeholder="Descrição" name="description"/>
                                    <button type="submit">Alterar</button>
                                </>}
                                    
                            </form>
                        </>
                    }
                </li>

                <li>
                    <div className="titlePortfolioDashboard">Skills</div>
                    <div className="ButtonDashboard">
                        <button onClick={()=> {if(openSkill.skillAdd){setOpenSkill({skillAdd:false})}else{setOpenSkill({skillAdd:true})}}}>Adicionar</button>
                        <button onClick={()=> {if(openSkill.skillExc){setOpenSkill({skillExc:false})}else{setOpenSkill({skillExc:true})}}}>Excluir</button>
                        <button onClick={()=> {if(openSkill.skillAlt){setOpenSkill({skillAlt:false})}else{setOpenSkill({skillAlt:true})}}}>Alterar</button>
                    </div>
                    {openSkill.skillAdd && <p>Adicionar</p>}
                    {openSkill.skillExc && <p>Excluir</p>}
                    {openSkill.skillAlt && <p>Alterar</p>}
                </li>
                <li>
                    <div className="titlePortfolioDashboard">Introdução inicio</div>
                    <div className="ButtonDashboard">
                        <button onClick={()=> {if(openIntroInicio.alt){setOpenIntroInicio({alt:false})}else{setOpenIntroInicio({alt:true})}}}>Alterar</button>
                    </div>
                    {openIntroInicio.alt && <p>Alterar</p>}
                </li>
                <li>
                    <div className="titlePortfolioDashboard">Introdução sobre</div>
                    <div className="ButtonDashboard">
                        <button onClick={()=> {if(openIntroSobre.alt){setOpenIntroSobre({alt:false})}else{setOpenIntroSobre({alt:true})}}}>Alterar</button>
                     
                    </div>
                    {openIntroSobre.alt && <p>Alterar</p>}

                </li>
            </ul>
        </section>
    )
}