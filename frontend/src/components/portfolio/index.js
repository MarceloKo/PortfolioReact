import ParticlesBackground from "../particleBackground/ParticlesBackground";
import Footer from "./footer";
import Header from "./header";

export default function Portfolio({children}){
    
    return(
        <div style={{width:"100%"}}>
    <ParticlesBackground/>
           
            <div className="container">
            <Header/>
            {children}
            <Footer/>
            </div>
            
            
            
        </div>

        
       
    )
}