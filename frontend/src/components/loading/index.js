import "./style.css"
export default function Loading({size}){
    return(
        <div className="loader" style={{width:`${size? size:"15px"}`,height:`${size? size:"15px"}`}}></div>
    )
}