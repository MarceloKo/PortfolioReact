import React, { useState, useRef, useEffect } from "react";
import "./style.css"
import { IoIosAddCircle } from "react-icons/io"
import {AiOutlineEye} from "react-icons/ai"
import api from "../../services/api";
import useAnotation from "../../store/storeAnotation";
import useContext from "../../store/storeContext";

export default function DragNDrop() {
    const [list, setList] = useState()

    const listSend = useAnotation((state) => state.listSend);
    const setListSend = useAnotation((state) => state.setListSend);
    const getDate = useAnotation((state) => state.getDate);
    const [loading, setLoading] = useState(false)
    const [dragging, setDragging] = useState(false)
    const dragItem = useRef()
    const dragNode = useRef()

    const setOpen = useContext((state) => state.setOpen);
    const setModalContent = useContext((state) => state.setModalContent);

    
    useEffect(()=>{
            getData()
  
    },[getDate])

    useEffect(() => {
        const sendNewList = async () => {
            await api.post('/anotation/update', { list: listSend },{headers: {authorization: 'Bearer ' + localStorage.getItem("token")}})
        }
        if (loading) {
            sendNewList()
            setLoading(false)
        }
    }, [listSend,loading])

    const handleCreateItem= async (id)=>{
        await api.post('/anotation/createitem', {_id:id},{headers: {authorization: 'Bearer ' + localStorage.getItem("token")}})
        .then(()=>{
            getData()
        })
    }

    const getData = async() =>{
        const response = await api.get('/anotation/get')
        setList(response.data)
    }

    const handleDragStart = (e, params) => {
        // console.log('drag starting..', params)
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handleDragEnter = (e, params) => {
        // console.log('Entering drag', params)
        const currentItem = dragItem.current;
        if (e.target !== dragNode.current) {
            // console.log("TARGET IS NOT THE SAME")
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[params.grpI].items.splice(params.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0])
                dragItem.current = params;
                setListSend(list)
                return newList
            })
        }
    }

    const handleDragEnd = (e) => {
        // console.log('Ending drag..')
        setLoading(true)
        dragItem.current = null;
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragNode.current = null;
        setDragging(false)

    }
    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        };
        return 'dnd-item'
    }
    const createGroup = async () => {
        await api.post('/anotation/store',[],{headers: {authorization: 'Bearer ' + localStorage.getItem("token")}})
        .then(()=>{
            getData()
        }).catch(()=>{
            alert('Erro ao criar grupo')
        })
    }
    
    const handleClickHiddenGroup = async(_id)=>{
        await api.post('/anotation/hiddengroup', {_id:_id},{headers: {authorization: 'Bearer ' + localStorage.getItem("token")}})
        .then(()=>{
            getData()
        }).catch(()=>{
            alert('Erro ao ocultar grupo')
        })
    }

    return (
        <div className="drag-n-drop">
            {list &&
                list.map((grp, grpI) => (
                    <div
                        className="dnd-group"
                        key={grp._id}
                    >
                        <div className="actions-group">
                        <h3>{grp.title}</h3>

                        <AiOutlineEye onClick={()=>handleClickHiddenGroup(grp._id)}/>
                       
                        </div>
                        {grp.items.map((item, itemI) => {
                            return (
                                <div id={grp.hidden? "hiddenItem":null} className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"} key={item._id}
                                    
                                    onDragEnter={dragging ? (e) => handleDragEnter(e, { grpI, itemI }) : null}
                                    onDragStart={(e) => { if( !grp.hidden)handleDragStart(e, { grpI, itemI }) }}
                                    draggable={!grp.hidden}
                                    onClick={()=>{
                                        if(!grp.hidden){
                                            setModalContent({title:item.title,body:item.description,id:item._id,idgroup:grp._id})
                                            setOpen()
                                        }
                                        

                                    }}
                                >

                                    <p>{item.title}</p>
                                </div>
                            )
                        })}
                        
                        <div className="addItem" onClick={()=>handleCreateItem({_id:grp._id})}><IoIosAddCircle /></div>
          
                    </div>
                   

                   
                ))
                
            }
            <div className="addGrupo" onClick={createGroup}>
                <h3>+ Grupo</h3>
            </div>
        </div>
    )
}