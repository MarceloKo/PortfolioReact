import './style.css'
export default function Buttom ({children,...props}) {
    return (
      
       <button className='buttom'  {...props}>{children}</button>
     
        
    )
}