import Footer from "./footer";
import Header from "./header";

export default function Portfolio({children}){
    return(
        <div style={{width:"100%"}}>
            <div className="container">
            <Header/>
            {children}
            </div>
            <Footer/>
            
        </div>
       
    )
}