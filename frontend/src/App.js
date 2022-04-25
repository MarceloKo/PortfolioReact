import Routes from "./routes";
import React from "react";
import Portfolio from "./components/portfolio";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Portfolio>
          <Routes/>
        </Portfolio>
      </BrowserRouter>
      
     
  
  );
}

export default App;
