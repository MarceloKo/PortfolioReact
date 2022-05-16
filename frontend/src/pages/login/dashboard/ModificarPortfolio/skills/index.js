import { useEffect, useState } from "react";
import { MdPhotoCamera } from "react-icons/md"
import api from "../../../../../services/api";
export default function Skills() {
    const [openSkill, setOpenSkill] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [Skills, setSkills] = useState([]);
    const [file, setFile] = useState()

    const getApiSkills = async () => {
        const response = await api.get('/skill/get')
        setSkills(response.data.map(skill => { return { id: skill._id, value: skill.language } }))
    }

    async function skillAdd(e) {
        e.preventDefault();
        const formData = new FormData()
        if (!e.target.nameSkill.value) {
            alert("Preencha o nome da skill")
            return
        }
        if (!file) {
            alert("Selecione uma imagem")
            return
        }

       
        
        formData.append("arrayOfFiles", file)
        const data = {
            language: e.target.nameSkill.value,
    
        }
        formData.append("data",JSON.stringify(data))
        setIsLoading(true)
        await api.post('skill/store', formData)
            .then(() => {
                e.target.reset()
                setFile()
                alert("Skill adicionada com sucesso")
                setIsLoading(false)
                getApiSkills()

            })
            .catch(err => {
                alert("Ocorreu um erro ao adicionar skill!")
                setIsLoading(false)
            })
       


    }
    async function sendExcluirSkill(e) {
        e.preventDefault();
        if (!e.target.select.value) {
            return alert("Selecione uma skill para excluir!")
        }
        await api.post('/skill/delete', { id: e.target.select.value })
            .then(() => {
                alert("Skill excluida com sucesso!")
                getApiSkills()
            }).catch((error) => {
                alert(error.response.data.error)
            })
    }
    useEffect(() => {
        getApiSkills();
    }, [])
    return (
        <>
            <div className="titlePortfolioDashboard">Skills</div>

            <div className="ButtonDashboard">
                <button onClick={() => { if (openSkill.skillAdd) { setOpenSkill({ skillAdd: false }) } else { setOpenSkill({ skillAdd: true }) } }}>Adicionar</button>
                <button onClick={() => { if (openSkill.skillExc) { setOpenSkill({ skillExc: false }) } else { setOpenSkill({ skillExc: true }) } }}>Excluir</button>
            </div>
            {openSkill.skillAdd &&
                <div>
                    <form onSubmit={skillAdd} className="formSkill">
                        <div className="SkillBox">
                            <input type="text" name="nameSkill" placeholder="Nome da Skill" />
                            <label htmlFor="fileSkill"><MdPhotoCamera />{file ? 'Alterar foto' : 'Adicionar foto'}</label>
                            <p style={{ fontSize: '12px', marginTop: '-5px' }}>{file && file.name}</p>
                            <input type="file" name="fileSkill" id="fileSkill" placeholder="Imagem da Skill" onChange={(e) => setFile(e.target.files[0])} />
                            <button type="submit" disabled={isLoading}>{isLoading? "Enviando..." : "Adicionar"}</button>

                        </div>

                    </form>
                </div>}
            {openSkill.skillExc &&
                <form className="formExpAdd" onSubmit={sendExcluirSkill}>
                    <select name="select">
                        <option value="">Selecione uma experiência</option>
                        {Skills.map(skill => <option value={skill.id} key={skill.id}>{skill.value}</option>)}
                    </select>
                    <button type="submit">Excluir</button>

                </form>}
        </>
    )
}