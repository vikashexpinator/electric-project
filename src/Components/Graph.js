import React, { useState, useEffect } from "react";

// Import Packages...
// import axios from "axios";

// Import Assets
import Logob from "../assets/images/Logo-b.png";

// Import Components..
import { Box, Button, Typography, Container, Grid, Link } from "@mui/material";
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

// Import Function
import { xmlToJson } from "../Utils/xmlToJs";
// import {apiRequrestForElectricPrice} from '../Utils/apiRequest'
import {
  euroPerMwhToEuroCentsPerKwh,
  GetCurrentTime,
  ChangeDateFormat,
  getPointerPosition,
  getPointerPositionHeight,
  applianceElectricCost,
} from "../Utils/commonFunction";

// const graphData = [
//   {
//     name: "Page 1",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page 2",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

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

  // applianceElectricCost(appCon, vat, spotPrice)
  // converted data and set into "first" state
  useEffect(() => {
    xmlToJson(setfirst);
  }, []);

  // get price array
  let getPriceArray =
    first && first.Publication_MarketDocument.TimeSeries[0].Period[0].Point;

  // const data = getPriceArray.map(el => el["price.amount"]).flat()

  //   let stringdata = data.map(el => {
  //     if (euroPerMwhToEuroCentsPerKwh(el) < 10 ){
  //         // console.log("i am one")
  //         return "#00FF0A"
  //     }else if (euroPerMwhToEuroCentsPerKwh(el) > 10 && euroPerMwhToEuroCentsPerKwh(el) < 20    ){
  //         // console.log("i am two")
  //         return "#FAFF00"
  //     }else if (euroPerMwhToEuroCentsPerKwh(el) >= 20){
  //         // console.log("i am three")
  //         return "#FF3737"
  //     }
  // })

  //   let newArray =
  //     getPriceArray !== undefined &&
  //     getPriceArray.map((el) => {
  //       return [el.position, el["price.amount"]];
  //     });

  //   const newArr =
  //     newArray.length > 0
  //       ? newArray.map((el) => <p>{euroPerMwhToEuroCentsPerKwh(el[1])}</p>)
  //       : null;

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

  // Get WeekDayName According to date
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

  // Get Today Max Electric Price
  // function TodayMaxElectricPrice() {
  //   if (getPriceArray !== undefined) {
  //     const spotElecticPrice =
  //       getPriceArray[presentTime - 1]["price.amount"].toString();
  //     return spotElecticPrice;
  //   }
  // }

  // useEffect(() => {
  //   const loadPost = async () => {
  //     const response = await axios.get(
  //       "https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=202212142300&periodEnd=202212152300"
  //     );
  //     response
  //       ? console.warn(response.data)
  //       : console.warn("no we don't have data");
  //   };
  //   // Call the function
  //   loadPost();
  // }, []);

  //   let dataArr = [];

  //   for (let i = 0; i < 24; i++) {
  //     let Obj = {
  //       name: 0,
  //       uv: 26,
  //       // pv: 24,
  //       amt: 24,
  //     };
  //     Obj.name = i;
  //     dataArr[i] = Obj;
  //   }

  // el["price.amount"]
  // el.position

  useEffect(() => {
    if (getPriceArray !== undefined) {
      let newData = [...getPriceArray];
      let max = 0;
      let dataArr = [];
      newData.map((el) => {
        let Obj = {
          name: el.position[0],
          electricPrice: euroPerMwhToEuroCentsPerKwh(el["price.amount"][0]),
          height: 32,
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
          // console.log("i am one")
          return "#00FF0A";
        } else if (
          euroPerMwhToEuroCentsPerKwh(el) > 10 &&
          euroPerMwhToEuroCentsPerKwh(el) < 20
        ) {
          // console.log("i am two")
          return "#FAFF00";
        } else if (euroPerMwhToEuroCentsPerKwh(el) >= 20) {
          // console.log("i am three")
          return "#FF3737";
        }
      });
      // for less then 10 #00FF0A,#FFFFFF
      // 10-20 - #FFFFFF,#FAFF00
      // more then 30 - #FAFF00,#FF3737
      // console.log(stringdata.toString());
      setGradientColor(stringdata.toString());
    }

  }, [first]);

  function euroPerMwhToEuroCentsPerKwh(euroPerMwh) {
    const euroPerKwh = (euroPerMwh / 1000) * 100;
    return parseFloat(euroPerKwh).toFixed(2);
  }

  //   let stringdata = data.map(el => {
  //     if (euroPerMwhToEuroCentsPerKwh(el) < 10 ){
  //         // console.log("i am one")
  //         return "#00FF0A"
  //     }else if (euroPerMwhToEuroCentsPerKwh(el) > 10 && euroPerMwhToEuroCentsPerKwh(el) < 20    ){
  //         // console.log("i am two")
  //         return "#FAFF00"
  //     }else if (euroPerMwhToEuroCentsPerKwh(el) >= 20){
  //         // console.log("i am three")
  //         return "#FF3737"
  //     }
  // })

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

  console.log("price", getPriceArray?.map((el) => el["price.amount"]).flat());
  // debugger
  return (
    <div className="gradientcolor2 graph-h">
      <Container maxWidth="full">
        <Grid
          display="flex"
          justifyContent="space-between"
          container
          sx={{ marginBottom: "50px", paddingTop: "20px" }}
        >
          <Box>
            <Link href="#">
              <img src={Logob} alt="" />
            </Link>
          </Box>
          <Box>
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
                    }}
                  >
                    {GetCurrentTime()}
                  </Typography>
                </Box>
                <Box xs={6} textAlign="center">
                  <Typography
                    variant="h3"
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
                    variant="h3"
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
                  {/*30,02 c/KWh */}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <ResponsiveContainer width="95%" height={400}>
          <LineChart
            width={1000}
            height={400}
            //className="line-chart-map"
            style={{
              background:
                `linear-gradient(to right, #ffff, ${gradientColor})`,
            }}
            data={priceDataForGraph}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis dataKey="height" />
            <Tooltip />
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
                Sauna{t("description.Sauna")}{" "}
                {applianceElectricCost(appCon.sauna, vat, spotPrice)}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
                {t("description.Owen")}{" "}
                {applianceElectricCost(appCon.owen, vat, spotPrice)}{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
                {t("description.ElectricCar")}{" "}
                {applianceElectricCost(appCon.electricCar, vat, spotPrice)}{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
                {t("description.Dishwasher")}{" "}
                {applianceElectricCost(appCon.diswasher, vat, spotPrice)}
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
                {t("description.Washingmachine")}{" "}
                {applianceElectricCost(appCon.washingMachine, vat, spotPrice)}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
                {t("description.LaundryDryer")}{" "}
                {applianceElectricCost(appCon.laundryDryer, vat, spotPrice)}{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
                {t("description.GamingPC")}{" "}
                {applianceElectricCost(appCon.gamingPc, vat, spotPrice)}{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#111010",
                  fontSize: "25px",
                  fontWeight: "100",
                  fontFamily: "Fredoka",
                }}
              >
                {t("description.Coffeemaker")}{" "}
                {applianceElectricCost(appCon.coffeeMaker, vat, spotPrice)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box textAlign="center">
          <Typography
            sx={{
              color: "#111010",
              fontSize: "24px",
              fontWeight: "100",
              fontFamily: "Fredoka",
            }}
          >
            {t("description.BottomMsg")}
          </Typography>
        </Box>
      </Container>

      {/*     
      <div className="PointerMain" 
      // style={{ top: `${pointerheight}` }}
      >
        <div
          className="Pointer"
          // style={{ left: getPointerPosition(presentTime) }}
        >
          <div className="spotPrice" style={{ opacity: "0.7" }}>
            Spot Price
          </div>
        </div>
      </div>
    */}
    </div>
  );
}
