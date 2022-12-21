// Convert euro/Mwh to EuroCents/Kwh
export function euroPerMwhToEuroCentsPerKwh(euroPerMwh) {
  // 1 megawatt-hour is equal to 1000 kilowatt-hours
  // 1 Euro is equal to 100 cent euro
  const euroPerKwh = (euroPerMwh / 1000) * 100;
  return parseFloat(euroPerKwh).toFixed(2);
}

// Get currnt time in 24 hrs format
export function GetCurrentTime() {
  var getTime = new Date(); // for now
  const PresentTime = getTime.getHours() + ":" + getTime.getMinutes();
  return PresentTime;
}

// change data format yyyy-mm-dd to dd.mm.yyyy
export function ChangeDateFormat(dateStr) {
  var dArr = dateStr.split("-"); // ex input: "2010-01-18"
  return dArr[2] + "." + dArr[1] + "." + dArr[0].substring(2); // "18.01.10"
}

// Used to very the spot point position.
export function getPointerPosition(position) {
  // calculated by 100 devided by 24
  // position range 1 to 24
  if (position > 0 && position < 25) {
    const fixValue = 4.347826;
    const pointerPosition = `${(position - 1) * fixValue}%`;
    return pointerPosition;
  }
}
// maxTop = 15.9 rem and mintop 35.9rem 
export function getPointerPositionHeight(presnetValue, MaxValue) {
  let totalRem;
  if (presnetValue && MaxValue) {
    let heightPer = (((presnetValue/MaxValue)*100)/100);
    let fixedValue = 5.52;
    totalRem = (35.6 + fixedValue - (heightPer * (35.6 -14.5)));
  };
  return totalRem;
}

// create required format of data used in as parameter
export function dataFormatForApi(date) {
  return date.toJSON().slice(0, 10).replaceAll("-", "");
}

// Different API Date for today yesterday and tomorrow
export function differentAPIDate() {
  var today = new Date();
  var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  var dayBeforeyYesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000 * 2);

  let dataData = {
    todayDate: dataFormatForApi(today),
    tomorrowDate: dataFormatForApi(tomorrow),
    yesterdayDate: dataFormatForApi(yesterday),
    dayBeforeyYesterday: dataFormatForApi(dayBeforeyYesterday),
  };
  return dataData;
}

// Get WeekDayName According to date
export function getWeekdayName(date) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekdays[date.getDay()];
}

// Appliance Electric Cost
export function applianceElectricCost(consumption, vat, spotPrice) {
  console.log(consumption, vat, spotPrice)
  const perHourPriceToPay = (spotPrice * (1 + vat/100)) * consumption;
  return `${parseFloat(perHourPriceToPay).toFixed(2)}€`;
}



// https://community.home-assistant.io/t/electricity-day-ahead-prices-for-home-assistant-using-node-red-and-entso-e-api/394484
// https://transparency.entsoe.eu/content/static_content/Static%20content/web%20api/Guide.html
// https://transparency.entsoe.eu/transmission-domain/r2/dayAheadPrices/show?name=&defaultValue=false&viewType=TABLE&areaType=BZN&atch=false&dateTime.dateTime=12.12.2022+00:00|CET|DAY&biddingZone.values=CTY|10YSE-1--------K!BZN|10Y1001A1001A44P&resolution.values=PT60M&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2)

// const DateArrray = Publication_MarketDocument.TimeSeries[0].Period[0].Point
// const DateArrrayPostion = Publication_MarketDocument.TimeSeries[0].Period[0].Point[0].position
// const DateArrrayPath = Publication_MarketDocument.TimeSeries[0].Period[0].Point[0]["price.amount"]
// const todaydate = Publication_MarketDocument["period.timeInterval"][0].end[0]
// const currency = Publication_MarketDocument.TimeSeries[0]["currency_Unit.name"][0]


// const applianceData = {
//   currentVAT: 10, // in percent
//   consumption: {
//     sauna: "2.7", // in kwh
//     owen: "0.5",
//     electricCar: "4",
//     diswasher: "0.34",
//     washingMachine: "0.34",
//     laundryDryer: "1",
//     gamingPc: "0.5",
//     coffeeMaker: "0.03",
//   }
// }
