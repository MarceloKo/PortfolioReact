import { useEffect, useState } from "react";
import { MdPhotoCamera } from "react-icons/md"
import 'animate.css';
import api from "../../../../../services/api";
import Loading from "../../../../../components/loading";

export default function Project() {
    const [openProject, setOpenProject] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [project, setProject] = useState([]);
    const [file, setFile] = useState()

    const getApiProjects = async () => {
        const response = await api.get('/project/get')
        setProject(response.data.map(project => { return { id: project._id, value: project.title } }))
    }

    async function projectAdd(e) {
        e.preventDefault();
        const formData = new FormData()
        if (!e.target.title.value) {
            alert("Preencha o titulo do projeto")
            return
        }
        if (!e.target.description.value) {
            alert("Preencha a descrição do projeto")
            return
        }
        if (!file) {
            alert("Selecione uma imagem")
            return
        }

        formData.append("arrayOfFiles", file)

        const data = {
            title: e.target.title.value,
            description: e.target.description.value,

        }
        formData.append("data", JSON.stringify(data))

        setIsLoading(true)

        await api.post('project/store', formData, { headers: { authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(() => {
                e.target.reset()
                setFile()
                alert("Projeto adicionado com sucesso")
                setIsLoading(false)
                getApiProjects()

            })
            .catch(err => {
                alert("Ocorreu um erro ao adicionar o projeto!")
                setIsLoading(false)
            })



    }
    async function sendExcluirProject(e) {
        e.preventDefault();
        if (!e.target.select.value) {
            return alert("Selecione um projeto para excluir!")
        }
        if(!isLoading){
            setIsLoading(true)
            await api.post('/project/delete', { id: e.target.select.value }, { headers: { authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(() => {
                alert("Projeto excluido com sucesso!")
                getApiProjects()
                setIsLoading(false)
            }).catch((error) => {
                alert(error.response.data.error)
                setIsLoading(false)

            })
        }

       
    }
    useEffect(() => {
        getApiProjects();
    }, [])
    return (
        <>
            <div className="titlePortfolioDashboard">Projetos</div>

            <div className="ButtonDashboard">
                <button onClick={() => { if (openProject.projectAdd) { setOpenProject({ projectAdd: false }) } else { setOpenProject({ projectAdd: true }) } }}>Adicionar</button>
                <button onClick={() => { if (openProject.projectExc) { setOpenProject({ projectExc: false }) } else { setOpenProject({ projectExc: true }) } }}>Excluir</button>
            </div>
            {openProject.projectAdd &&
                <div className="animate__animated animate__fadeInLeft animate__faster">
                    <form onSubmit={projectAdd} className="formProject">
                        <div className="ProjectBox">

                            <input type="text" name="title" placeholder="Titulo do projeto" />
                            <textarea placeholder="Descrição" name="description" className="textareaProject" />
                            <label htmlFor="fileSkill"><MdPhotoCamera />{file ? 'Alterar foto' : 'Adicionar foto'}</label>
                            <p style={{ fontSize: '12px', marginTop: '-5px' }}>{file && file.name}</p>
                            <input type="file" name="fileSkill" id="fileSkill" placeholder="Imagem da Skill" onChange={(e) => setFile(e.target.files[0])} />
                            <button type="submit" disabled={isLoading}>{isLoading ? <Loading/> : "Adicionar"}</button>

                        </div>

                    </form>
                </div>}
            {openProject.projectExc &&
                <form className="formExpAdd animate__animated animate__fadeInLeft animate__faster" onSubmit={sendExcluirProject}>
                    <select name="select">
                        <option value="">Selecione um projeto</option>
                        {project.map(projeto => <option value={projeto.id} key={projeto.id}>{projeto.value}</option>)}
                    </select>
                    <button type="submit">{isLoading ? <Loading/> : "Excluir"}</button>

                </form>}
        </>
    )
}