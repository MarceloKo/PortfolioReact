import { BrowserRouter,Routes,Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";

const Routess = ()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Inicio/>} />
                <Route path="/sobre"  element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routess;