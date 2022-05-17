import "./style.css"
import { AiFillCloseCircle } from "react-icons/ai"
import useContext from "../../store/storeContext";
import { useEffect, useState } from "react";
export default function Modal() {
    const open = useContext((state) => state.open);
    const setClose = useContext((state) => state.setClose);
    const modalContent = useContext((state) => state.modalContent);
    const [data,setData] = useState()
   
    useEffect(()=>{
        setData({ title:modalContent.title,description:modalContent.body,_id:modalContent.id})
    },[modalContent])
    
    return (
        <>
            {open && (
                <div className="Modal" >
                    {console.log(data)}
                    <div className="BoxModal">
                        <div className="titleModal">
                            <input value={data.title} onChange={(e)=> {setData({...data,title:e.target.value})}}></input>
                            <AiFillCloseCircle size={27} color={'#3f2572'} onClick={()=> {
                                setClose()
                                setData({})
                            }} />
                        </div>
                        <div className="bodyModal">
                            {modalContent.body}
                        </div>
                    </div>


                </div>
            )}
        </>

    )
}