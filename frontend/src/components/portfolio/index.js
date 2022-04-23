import Footer from "./footer";
import Header from "./header";

export default function Portfolio({children}){
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}