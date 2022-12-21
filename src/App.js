import React, { useState } from "react";
import "./App.css";
import Graph from "./Components/Graph";
import Welcome from "./Components/Welcome";
// import { xmlToJson } from "./Utils/xmlToJs";

// import {apiRequrestForElectricPrice} from './Utils/apiRequest'

import { useTranslation } from "react-i18next";

// const langs = {
//   en: { nativeName: "English" },
//   de: { nativeName: "Deutsch" },
//   su: { nativeName: "Suomeksi" },
// };


function App() {
  const [isWelcomePage, setIsWelcomePage] = useState(true);
  const { t } = useTranslation();

// setTimeout(() => {
//   const bottomPosition = document.getElementsByClassName("recharts-wrapper")[0].getBoundingClientRect().bottom;
//   const topPosition = document.getElementsByClassName("recharts-wrapper")[0].getBoundingClientRect().top;
//   const leftPosition = document.getElementsByClassName("recharts-wrapper")[0].getBoundingClientRect().left;
//   const rightPosition = document.getElementsByClassName("recharts-wrapper")[0].getBoundingClientRect().right;
  
//   console.warn("thifsdfsdfsfsfsd", bottomPosition, topPosition, leftPosition, rightPosition)      
// }, 2000);


  return (
    <div className="App">
      {isWelcomePage && <Welcome setIsWelcomePage={setIsWelcomePage} t={t} />}
      {!isWelcomePage && <Graph t={t}/>}
      {/* <div>
        {Object.keys(langs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {langs[lng].nativeName}
          </button>
        ))}
      </div>
      <h3>{t("description.part1")}</h3>
      <h4>{t("description.part2")}</h4>
          <h4>{t("description.continue")}</h4> */}
    </div>
  );
}

export default App;



// getPriceArray.map(el => el["price.amount"]).flat()

// function euroPerMwhToEuroCentsPerKwh(euroPerMwh) {
//   const euroPerKwh = (euroPerMwh / 1000) * 100;
//   return parseFloat(euroPerKwh).toFixed(2);
// }

// let stringdata = data.map(el=> {
//     if (euroPerMwhToEuroCentsPerKwh(el) < 10 ){
//         return "#00FF0A,#FFFFFF"
//     }else if (10 < euroPerMwhToEuroCentsPerKwh(el) < 20){
//         return "#FAFF00"
//     }else if (euroPerMwhToEuroCentsPerKwh(el) > 30){
//         return "#FF3737"
//     }
// })

// console.log(stringdata.toString());