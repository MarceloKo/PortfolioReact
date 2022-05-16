import "./style.css"

export default function Alert({message,type}){
    return(
        <>
        
            {type == 'error' && <div className="alert-error">{message}</div>}
            {type == 'success' && <div className="alert-success">{message}</div>}
        </>
       
    )
}