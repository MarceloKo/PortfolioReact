import "./style.css"
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai"
import { ImCloudCheck, ImCloudUpload } from "react-icons/im"
import useContext from "../../store/storeContext";
import {  useEffect, useRef, useState } from "react";
import api from "../../services/api";
import useAnotation from "../../store/storeAnotation";
import { headers } from "../../services/auth";
export default function Modal() {
    const open = useContext((state) => state.open);
    const setClose = useContext((state) => state.setClose);
    const modalContent = useContext((state) => state.modalContent);

    const [data, setData] = useState()

    // Mostrando se já está salvo
    const [save, setSave] = useState(true)

    // Trazer lista atulizada.
    const setGetDate = useAnotation((state) => state.setGetDate);
    const getDate = useAnotation((state) => state.getDate);
    // 
    const timeoutRef = useRef(null)

    useEffect(() => {
        if(!save){
            window.clearTimeout(timeoutRef.current)
            timeoutRef.current = window.setTimeout(async () => {
                setSave(true)
                await api.post('/anotation/updateitem', data,headers)
                    .then(() => {
                        setGetDate(!getDate)
                    }).catch(() => {
                        alert('Ocorreu um erro ao salvar')
                    })
            }, 2000)
        }
    }, [data])

    useEffect(() => {
        setData({ title: modalContent.title, description: modalContent.body, _id: modalContent.id, idgroup: modalContent.idgroup })
    }, [modalContent])


    const onChange = (e) => {
        setSave(false)
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const closeModal = () => {
        setClose()
        // setData({})
    }
    const deleteItem = async () => {

        await api.post('/anotation/deleteitem', { _id: data.idgroup, idItem: data._id },headers)
            .then(() => {
                closeModal()
                setGetDate(!getDate)

            }).catch(() => {
                alert('Ocorreu um erro ao deletar')
            })
    }


    // const debounced = () => {
        
    // }

    return (
        <>
            {open && (
                <div className="Modal" >
                
                    <div className="BoxModal">
                        <div className="titleModal">
                            <input value={data.title} name="title" onChange={onChange} />
                            <div className="titleOptions">
                                <AiFillDelete size={27} color={'red'} onClick={deleteItem} />
                                <AiFillCloseCircle size={27} color={save? '#3f2572' : '#722525'} onClick={() => {
                                    save ? closeModal() : alert('Aguarde o envio da sua anotação')

                                }} />
                            </div>
                        </div>
                        <div className="bodyModal">
                            <textarea placeholder="Descrição" name="description" value={data.description} onChange={onChange} />
                            {save ? <ImCloudCheck size={27} color={'green'} /> : <ImCloudUpload size={26} />}
                        </div>

                    </div>
                </div>
            )}
        </>

    )
}