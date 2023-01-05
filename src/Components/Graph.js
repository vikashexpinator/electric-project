// --- Import Packages
import React, { useState, useEffect } from "react";
// import axios from "axios";

// --- Import Assets
import Logob from "../assets/images/Logo-b.png";
import CustomTooltip from "./TooltipComponent";

// --- Import Components..
import { Box, Typography, Container, Grid, Link } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// --- Import Function
import { xmlToJson } from "../Utils/xmlToJs";
import {applianceDataApi} from "../Utils/applianceApi"
// --- import {apiRequrestForElectricPrice} from '../Utils/apiRequest'
import {
  
  GetCurrentTime,
  ChangeDateFormat,

  getPointerPositionHeight,
  applianceElectricCost,
} from "../Utils/commonFunction";

const applianceData = {
  currentVAT: 10, // in percent
  consumption: {
    sauna: "2.7", // in kwh
    owen: "0.5",
    electricCar: "4",
    diswasher: "0.34",
    washingMachine: "0.34",
    laundryDryer: "1",
    gamingPc: "0.5",
    coffeeMaker: "0.03",
  },
};

export default function Graph({ t }) {
  // Define State Variable
  const [first, setfirst] = useState();
  const [maxPrice, setMaxPrice] = useState(0);
  const [priceDataForGraph, setPriceDataForGraph] = useState();
  const [pointerheight, setPointerheight] = useState();
  const [spotPrice, setSpotPrice] = useState();
  const [appCon, setAppCon] = useState(applianceData.consumption);
  const [vat, setVat] = useState(applianceData.currentVAT);
  const [gradientColor, setGradientColor] = useState("");
  const [applianceDatafromApi, setapplianceDatafromApi ] = useState({});
  // const [windowHeight, setWindowHeight ] = useState(""); 
  // const [windowWidth, setWindowWidth ] = useState(""); 


  // converted data and set into "first" state
  useEffect(() => {
    xmlToJson(setfirst);
    applianceDataApi(setapplianceDatafromApi);
    // var w = window.innerWidth;
    // var h = window.innerHeight;
    // setWindowHeight(h)
    // setWindowWidth(w)
  }, []);

  // function selectCurrentElement (){
  //   let getTime = new Date();
  //   document.getElementsByClassName("recharts-cartesian-axis-ticks")[0].getElementsByTagName("text")[`${getTime.getHours() - 1}`].classList.add("highliteText")
  // }
  
  // setTimeout(() => {
  //   selectCurrentElement()  
  // }, 2000);
  

  // --- get price array
  let getPriceArray =
    first && first.Publication_MarketDocument.TimeSeries[0].Period[0].Point;


  // --- get today date from first
  let todayData =
    first &&
    first.Publication_MarketDocument["period.timeInterval"][0].end[0]?.split(
      "T"
    )[0];

  // --- get hh of of hh:mm
  const presentTime = GetCurrentTime().split(":")[0];

  // --- To get the present electricity price.
  function presentElectricityPrice() {
    if (getPriceArray !== undefined) {
      const spotElecticPrice =
        getPriceArray[presentTime - 1]["price.amount"].toString();
      return spotElecticPrice;
    }
  }

  // --- Get WeekDayName According to date
  function getWeekdayName(date) {
    const weekdays = [
      t("description.Sunday"),
      t("description.Monday"),
      t("description.Tuesday"),
      t("description.Wednesday"),
      t("description.Thursday"),
      t("description.Friday"),
      t("description.Saturday"),
    ];
    return weekdays[date.getDay()];
  }

  // Get Different Device Consumtion data


// function newHeight(){
//   let newData = [...getPriceArray];
//   let max = 55;
//   newData.map(el => {
//     if (euroPerMwhToEuroCentsPerKwh(el["price.amount"][0]) > max){
//       max = euroPerMwhToEuroCentsPerKwh(el["price.amount"][0]) && euroPerMwhToEuroCentsPerKwh(el["price.amount"][0]);
//     }
//   })
//   max = Number(max)
//   return (max > 0) && max.toString() 
// }

  useEffect(() => {
    if (getPriceArray !== undefined) {
      let newData = [...getPriceArray];
      let max = 0;
      let dataArr = [];
      // function test (el){
      //   // if (el.position[0] == 1 || 24){
      //   //   return el.position[0]
      //   // }
      //   if (el.position[0].length === 1){
      //     if (el.position[0] === 1){
      //       return `0${el.position[0]}`
      //     }
      //     return `0${el.position[0]}:00`;
      //   }else{
      //     // if (el.position[0] == 24){
      //     //   return el.position[0]
      //     // }
      //     return `${el.position[0]}:00`;
      //   }
      // }

      newData.map((el) => {
        let Obj = {
          name: el.position[0].length === 1 ? `0${el.position[0]}:00` : `${el.position[0]}:00`,
          electricPrice: euroPerMwhToEuroCentsPerKwh(el["price.amount"][0]),
          // height: maxPrice ? maxPrice + 4 : maxPrice,
          height: 50
        };
        if (Obj.electricPrice > max) {
          max = Obj.electricPrice;
        }
        dataArr.push(Obj);
      });
      if (dataArr.length > 0) {
        setPriceDataForGraph(dataArr);
        max > 0 && setMaxPrice(max);
      }

      const data = getPriceArray.map((el) => el["price.amount"]).flat();

      let stringdata = data.map((el) => {
        if (euroPerMwhToEuroCentsPerKwh(el) < 10) {
      
          return "#00FF0A";
        } else if (
          euroPerMwhToEuroCentsPerKwh(el) > 10 &&
          euroPerMwhToEuroCentsPerKwh(el) < 20
        ) {
    
          return "#FAFF00";
        } else if (euroPerMwhToEuroCentsPerKwh(el) >= 20) {
     
          return "#FF3737";
        }
      });
  
      setGradientColor(stringdata.toString());
    }

  }, [first]);

  function euroPerMwhToEuroCentsPerKwh(euroPerMwh) {
    const euroPerKwh = (euroPerMwh / 1000) * 100;
    return parseFloat(euroPerKwh).toFixed(2);
  }

  useEffect(() => {
    if (priceDataForGraph !== undefined && maxPrice > 0) {
      let currentPrice = euroPerMwhToEuroCentsPerKwh(presentElectricityPrice());
      setSpotPrice(currentPrice);
      let final = `${parseFloat(
        getPointerPositionHeight(currentPrice, maxPrice)
      ).toFixed(2)}rem`;
      setPointerheight(final);
    }
  }, [maxPrice]);

// function getHeightandWidth(){

// }

  return (
    <div className="gradientcolor2 graph-h"
    style={{
      background:
        `linear-gradient(to right, ${gradientColor})`,
    }} 
    >
      <Container maxWidth="full">
        <Grid
        className="top-bar"
          display="flex"
          justifyContent="space-between"
          container
          sx={{ marginBottom: "50px", paddingTop: "20px" }}
        >
          <Box>
            <Link href="#">
              <img className="logo-e" src={Logob} alt="" />
            </Link>
          </Box>
          <Box className="load-box">
            <Box
              sx={{
                border: "1px solid #0000001f",
                background: "#ffffff73",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <Grid
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box xs={6}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#11014A",
                      fontSize: "60px",
                      fontWeight: "100",
                      fontFamily: "Fredoka",
                      marginRight: "20px",
                    }}
                  >
                    {GetCurrentTime()}
                  </Typography>
                </Box>
                <Box xs={6} textAlign="center">
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#11014A",
                      fontSize: "22px",
                      fontWeight: "100",
                      fontFamily: "Fredoka",
                    }}
                  >
                    {getWeekdayName(new Date())}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#11014A",
                      fontSize: "22px",
                      fontWeight: "100",
                      fontFamily: "Fredoka",
                    }}
                  >
                    {typeof todayData == "string"
                      ? ChangeDateFormat(todayData)
                      : "none"}
                  </Typography>
                </Box>
              </Grid>
              <Box textAlign="center" xs={12}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#11014A",
                    fontSize: "22px",
                    fontWeight: "100",
                    fontFamily: "Fredoka",
                  }}
                >
                  {t("description.FinlandSpotPriceNow")}
                </Typography>
                <Typography
                  sx={{
                    color: "#11014A",
                    fontSize: "25px",
                    fontWeight: "800",
                    fontFamily: "Fredoka",
                  }}
                >
                  {` ${euroPerMwhToEuroCentsPerKwh(
                    presentElectricityPrice()
                  )} c/KWh`}
             
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <ResponsiveContainer className='rs-container' height={400} padding="0px" margin="0px">
          <LineChart
            // width={windowWidth}
            // height={windowHeight}
            width={1000}
            height={400}
            data={priceDataForGraph}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="11" />
            <XAxis dataKey="name" />
            <YAxis dataKey="height" />
            <Tooltip  content={CustomTooltip} />
            <Legend />
            <Line
              type="monotone"
              dataKey="electricPrice"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          container
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            paddingTop: "20px",
            gap: "30px",
          }}
        >
          <Box>
            <Box
              sx={{
                border: "1px solid #0000001f",
                background: "#ffffff73",
                padding: "20px",
                borderRadius: "20px",
                width: "335px",
              }}
            >
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
              {applianceDatafromApi ? applianceDatafromApi.deviceName1 + " " + applianceElectricCost(applianceDatafromApi.Consumption1, applianceDatafromApi.vat, spotPrice) : t("description.Sauna") + " " + applianceElectricCost(appCon.sauna, vat, spotPrice)}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
              {applianceDatafromApi ? applianceDatafromApi.deviceName2 + " " + applianceElectricCost(applianceDatafromApi.Consumption2, applianceDatafromApi.vat, spotPrice) : t("description.Owen") + " " + applianceElectricCost(appCon.owen, vat, spotPrice)}

              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
              {applianceDatafromApi ? applianceDatafromApi.deviceName3 + " " + applianceElectricCost(applianceDatafromApi.Consumption3, applianceDatafromApi.vat, spotPrice) : t("description.ElectricCar") + " " + applianceElectricCost(appCon.electricCar, vat, spotPrice)}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
              {applianceDatafromApi ? applianceDatafromApi.deviceName4 + " " + applianceElectricCost(applianceDatafromApi.Consumption4, applianceDatafromApi.vat, spotPrice) : t("description.Dishwasher") + " " + applianceElectricCost(appCon.diswasher, vat, spotPrice)}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                border: "1px solid #0000001f",
                background: "#ffffff73",
                padding: "20px",
                borderRadius: "20px",
                width: "335px",
              }}
            >
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
              {applianceDatafromApi ? applianceDatafromApi.deviceName5 + " " + applianceElectricCost(applianceDatafromApi.Consumption5, applianceDatafromApi.vat, spotPrice) : t("description.Washingmachine") + " " + applianceElectricCost(appCon.washingMachine, vat, spotPrice)}

              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
              {applianceDatafromApi ? applianceDatafromApi.deviceName6 + " " + applianceElectricCost(applianceDatafromApi.Consumption6, applianceDatafromApi.vat, spotPrice) : t("description.LaundryDryer") + " " + applianceElectricCost(appCon.laundryDryer, vat, spotPrice)}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
              {applianceDatafromApi ? applianceDatafromApi.deviceName7 + " " + applianceElectricCost(applianceDatafromApi.Consumption7, applianceDatafromApi.vat, spotPrice) : t("description.GamingPC") + " " + applianceElectricCost(appCon.gamingPc, vat, spotPrice)}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "24px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
              {applianceDatafromApi ? applianceDatafromApi.deviceName8 + " " + applianceElectricCost(applianceDatafromApi.Consumption8, applianceDatafromApi.vat, spotPrice) : t("description.Coffeemaker") + " " + applianceElectricCost(appCon.coffeeMaker, vat, spotPrice)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box textAlign="center" className="footer">
          <Typography
          className="bottomtextCss"
            sx={{
              color: "#111010",
              fontSize: "16px",
              fontWeight: "100",
              fontFamily: "Fredoka",
            }}
          >
          Sähköapurin on kehittänyt <a href='https://oomf.fi'>OOMF Agency</a> Helsingissä. Hinnat ovat sähköpörssin Arvonlisäverollisia SPOT-hintoja eikä niihin sisälly oman sopimuksesi marginaali. Kulutukset ovat arvioita. Palaute ja yhteydenotot: <a href="hello@oomf.fi">hello@oomf.fi</a>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

