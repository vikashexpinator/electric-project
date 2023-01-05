import React, { useState } from "react";
import "./App.css";
import Graph from "./Components/Graph";
import Welcome from "./Components/Welcome";
import { useTranslation } from "react-i18next";
import Company from "./Components/Company";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  // --- Switch between welcome page and main interface
  const [isWelcomePage, setIsWelcomePage] = useState(false);
  
  // --- To implement translation.
  const { t } = useTranslation();

  return (
    <React.Fragment>
    <div className="App">
      {isWelcomePage && <Welcome setIsWelcomePage={setIsWelcomePage} t={t} />}
     
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isWelcomePage && <Graph t={t}/>}/>
        <Route path="update-device" element={<Company />} /> 
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

