import { Routes,Route } from "react-router-dom";
import React from "react";

import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import Projetos from "./pages/projetos";

const MainRoutes = ()=> {
    return(
            <Routes>
                <Route path="/"  element={<Inicio/>} />
                <Route path="/sobre"  element={<Sobre/>} />
                <Route path="/projetos"  element={<Projetos/>} />
                {/* <Route path="/login"  element={<Sobre/>} />  */}
            </Routes>
        
    )
}

export default MainRoutes;