import { useEffect, useState } from "react";
import api from "../../../../../services/api";
import { headers } from "../../../../../services/auth";

export default function Experience() {
    const [openExperience, setOpenExperience] = useState({});
    const [getExp, setGetExp] = useState([]);
    const [getExpAlt, setGetExpAlt] = useState();

    const handleClickAdd = () => {
        if (openExperience.expAdd) {
            setOpenExperience({ expAdd: false })
        } else {
            setOpenExperience({ expAdd: true })
        }
    }
    const handleClickExc = () => {

        if (openExperience.expExc) {
            setOpenExperience({ expExc: false })
        } else {
            setOpenExperience({ expExc: true })
        }
    }
    const handleClickAlt = () => {
        setGetExpAlt(null)
        if (openExperience.expAlt) {
            setOpenExperience({ expAlt: false })

        } else {
            setOpenExperience({ expAlt: true })
        }
    }


    const getExperience = async () => {
        const response = await api.get('/experience/get')
        setGetExp(response.data.map(experience => { return { id: experience._id, value: experience.company } }))
    }


    const sendFormExp = async (e) => {
        e.preventDefault();
        const data = {
            occupation: e.target.occupation.value,
            company: e.target.company.value,
            contract: e.target.contract.value,
            dateInitial: e.target.dateInitial.value,
            dateEnd: e.target.dateEnd.value,
            description: e.target.description.value,
        }
        if (!data.occupation || !data.company || !data.contract || !data.dateInitial || !data.dateEnd || !data.description) {
            alert("Preencha todos os campos!");
        }
        await api.post('/experience/store', data,headers)
            .then(() => {
                alert("Experiência adicionada com sucesso!");
                e.target.reset()
                getExperience()
            }).catch((error) => {
                alert("Erro ao adicionar experiência!");
            })


    }
    const sendExcluirExp = async (e) => {
        e.preventDefault()
        if (!e.target.select.value) {
            return alert("Selecione uma experiencia para excluir!")
        }
        await api.post('/experience/delete', { id: e.target.select.value },headers)
            .then(() => {
                alert("Experiência excluida com sucesso!")
                getExperience()
            }).catch((error) => {
                alert(error.response.data.error)
            })
    }

    const selectedAltExp = async (e) => {
        await api.post('/experience/getone', { id: e.target.value },headers).then((response) => {
            setGetExpAlt(response.data)
        }).catch(() => {
            setGetExpAlt(null)
        })
    }

    const sendAltExp = async (e) => {
        e.preventDefault()

        if (!getExpAlt.occupation || !getExpAlt.company || !getExpAlt.contract || !getExpAlt.dateInitial || !getExpAlt.dateEnd || !getExpAlt.description) {
            alert("Preencha todos os campos!");
        }
        await api.post('/experience/update', getExpAlt,headers)
            .then(() => {
                alert("Experiência alterada com sucesso!");
                setGetExpAlt(null)
             


            }).catch((error) => {
                alert("Erro ao alterar experiência!");
            })
        e.target.reset()

    }

    useEffect(() => {
        getExperience()
    }, [])

    return (
        <>
            <div className="titlePortfolioDashboard">Experiências</div>
            <div className="ButtonDashboard">
                <button onClick={handleClickAdd}>Adicionar</button>
                <button onClick={handleClickExc}>Excluir</button>
                <button onClick={handleClickAlt}>Alterar</button>
            </div>
            {openExperience.expAdd &&
                <form onSubmit={sendFormExp} className="formExpAdd">
                    <div className="formRow">
                        <input placeholder="Ocupação" name="occupation" />
                        <input placeholder="Empresa" name="company" />
                    </div>
                    <div className="formRow">
                        <input placeholder="Data inicio" name="dateInitial" />
                        <input placeholder="Data final" name="dateEnd" />
                    </div>
                    <input placeholder="Contrato" name="contract" />
                    <textarea placeholder="Descrição" name="description" />

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
                <div className="rowBoxExperience">

                    <form className="formExpAdd" onSubmit={sendAltExp}>
                        <select name="selected" onChange={selectedAltExp}>
                            <option value="">Selecione uma experiência</option>
                            {getExp.map(exp => <option value={exp.id} key={exp.id}>{exp.value}</option>)}
                        </select>
                        {getExpAlt &&
                            <>
                                <div className="formRow">
                                    <input placeholder="Ocupação" name="occupation" value={getExpAlt.occupation} onChange={(e) => setGetExpAlt({ ...getExpAlt, occupation: e.target.value })} />
                                    <input placeholder="Empresa" name="company" value={getExpAlt.company} onChange={(e) => setGetExpAlt({ ...getExpAlt, company: e.target.value })} />
                                </div>
                                <div className="formRow">
                                    <input placeholder="Data inicio" name="dateInitial" value={getExpAlt.dateInitial} onChange={(e) => setGetExpAlt({ ...getExpAlt, dateInitial: e.target.value })} />
                                    <input placeholder="Data final" name="dateEnd" value={getExpAlt.dateEnd} onChange={(e) => setGetExpAlt({ ...getExpAlt, dateEnd: e.target.value })} />
                                </div>
                                <input placeholder="Contrato" name="contract" value={getExpAlt.contract} onChange={(e) => setGetExpAlt({ ...getExpAlt, contract: e.target.value })} />
                                <textarea placeholder="Descrição" name="description" value={getExpAlt.description} onChange={(e) => setGetExpAlt({ ...getExpAlt, description: e.target.value })} />
                                <button type="submit">Alterar</button>
                            </>}

                    </form>

                </div>
            }
        </>
    )
}