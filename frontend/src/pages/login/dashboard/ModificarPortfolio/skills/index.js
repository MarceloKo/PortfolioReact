import { useState } from "react";

export default function Skills() {
    const [openSkill, setOpenSkill] = useState({});

    async function skillAdd(e){
        e.preventDefault();

    }

    return (
        <>
            <div className="titlePortfolioDashboard">Skills</div>
            <div className="ButtonDashboard">
                <button onClick={() => { if (openSkill.skillAdd) { setOpenSkill({ skillAdd: false }) } else { setOpenSkill({ skillAdd: true }) } }}>Adicionar</button>
                <button onClick={() => { if (openSkill.skillExc) { setOpenSkill({ skillExc: false }) } else { setOpenSkill({ skillExc: true }) } }}>Excluir</button>
                <button onClick={() => { if (openSkill.skillAlt) { setOpenSkill({ skillAlt: false }) } else { setOpenSkill({ skillAlt: true }) } }}>Alterar</button>
            </div>
            {openSkill.skillAdd && 
            <div>
                <form onSubmit={skillAdd} className="formSkill">
                    <div className="SkillBox">
                        <input type="text" placeholder="Nome da Skill" />
                        <input type="file" placeholder="Imagem da Skill" />
                        <button type="submit">Adicionar</button>
                    </div>
                    
                </form>
            </div>}
            {openSkill.skillExc && <div>Excluir</div>}
            {openSkill.skillAlt && <div>Alterar</div>}
        </>
    )
}