import "./App.css";
import { xmlToJson } from "./Utils/xmlToJs";
import { useEffect, useState } from "react";
import axios from 'axios';

import {
  euroPerMwhToEuroCentsPerKwh,
  GetCurrentTime,
  ChangeDateFormat,
  getPointerPosition,
} from "./Utils/commonFunction";
// import {apiRequrestForElectricPrice} from './Utils/apiRequest'

function App() {
  // Define State Variable
  const [first, setfirst] = useState();

  // converted data and set into "first" state
  useEffect(() => {
    xmlToJson(setfirst);
  }, []);

  // get price array
  let getPriceArray =
    first && first.Publication_MarketDocument.TimeSeries[0].Period[0].Point;
  let newArray =
    getPriceArray !== undefined &&
    getPriceArray.map((el) => {
      return [el.position, el["price.amount"]];
    });
  const newArr =
    newArray.length > 0
      ? newArray.map((el) => <p>{euroPerMwhToEuroCentsPerKwh(el[1])}</p>)
      : null;

  // get today date from first
  let todayData =
    first &&
    first.Publication_MarketDocument["period.timeInterval"][0].end[0]?.split(
      "T"
    )[0];

  // get hh of of hh:mm
  const presentTime = GetCurrentTime().split(":")[0];

  // To get the present electricity price.
  function presentElectricityPrice() {
    if (getPriceArray !== undefined) {
      const spotElecticPrice =
        getPriceArray[presentTime - 1]["price.amount"].toString();
      return spotElecticPrice;
    }
  }

  // Appliance Electric Cost
  // function ApplianceElectricCost(ElecConsumption, vat, spotPrice) {
  //   const perHourPriceToPay = (spotPrice + spotPrice * vat) * ElecConsumption;
  //   return perHourPriceToPay;
  // }

  // apiRequrestForElectricPrice();

  useEffect(() => {
    const loadPost = async () => {
        const response = await axios.get(
        "https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=202212142300&periodEnd=202212152300");
        response ? console.warn(response.data) : console.warn("no we don't have data")
    }
    // Call the function
    loadPost();
}, []);

  return (
    <div className="App">
      <h2>Our Conveter</h2>
      <div
        className="PriceWindow"
        // style={{ width: "563px", height: "259px", left: "1329px", top: "25px" }}
      >
        <div>{GetCurrentTime()}</div>
        <div>{`Monday ${
          typeof todayData == "string" ? ChangeDateFormat(todayData) : "none"
        }`}</div>
        <div>
          FINLAND SPOT PRICE NOW <br />
          {` ${euroPerMwhToEuroCentsPerKwh(presentElectricityPrice())} c/KWh`}
        </div>
        <div
          id="ElectricityChart"
          style={{
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {newArr}
        </div>
        <p>
          Sahkoapuri developed by OOMF Agency – Helsinki Finland. Prices are
          indicative and does not include your contract margin.
        </p>
        <div className="PointerMain">
          <div
            className="Pointer"
            style={{ left: getPointerPosition(presentTime) }}
          >
            <div className="spotPrice" style={{ opacity: "0.7" }}>
              Spot Price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

