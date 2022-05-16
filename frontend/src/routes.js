import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import Projetos from "./pages/projetos";
import Login from "./pages/login";
import Portfolio from "./components/portfolio";
import { PrivateRoute } from "./components/PrivateRoute/privateRoute";
import InicioDashboard from "./pages/login/dashboard/inicio";
import AlterarPortfolio from "./pages/login/dashboard/ModificarPortfolio";
import Blocodenotas from "./pages/login/dashboard/BlocoNotas";

const MainRoutes = ()=> {

    return(
        <Router>
            
                <Routes>
                    {/* Public Routes */}
                    <Route path="/"  element={<Portfolio><Inicio/></Portfolio>} />
                    <Route path="/sobre"  element={<Portfolio><Sobre/></Portfolio>} />
                    <Route path="/projetos"  element={<Portfolio><Projetos/></Portfolio>} />
                    <Route path="/login"  element={<Login/>} /> 
                    <Route path="/*" element={<h1 style={{margin:'auto'}}>PÁGINA NÃO ENCONTRADA</h1>} />

                    {/* Private Routes */}
                    <Route path="/dashboard/"  element={
                        <PrivateRoute redirectTo={"/login"}>
                            <InicioDashboard/>
                        </PrivateRoute>} 
                    /> 
                    <Route path="/dashboard/alterarportfolio"  element={
                        <PrivateRoute redirectTo={"/login"}>
                            <AlterarPortfolio/>
                        </PrivateRoute>} 
                    />
                    <Route path="/dashboard/blocodenotas"  element={
                        <PrivateRoute redirectTo={"/login"}>
                            <Blocodenotas/>
                        </PrivateRoute>
                    } />

                </Routes>
           
        </Router>
    )
}

export default MainRoutes;