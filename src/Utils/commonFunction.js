// --- Convert euro/Mwh to EuroCents/Kwh
export function euroPerMwhToEuroCentsPerKwh(euroPerMwh) {
  // 1 megawatt-hour is equal to 1000 kilowatt-hours
  // 1 Euro is equal to 100 cent euro
  const euroPerKwh = (euroPerMwh / 1000) * 100;
  return parseFloat(euroPerKwh).toFixed(2);
}

// --- Get currnt time in 24 hrs format
export function GetCurrentTime() {
  var getTime = new Date(); // for now
  // var min = (getTime.getMinutes() < 10) ? getTime.getMinutes().toString().padStart(2, '0') : getTime.getMinutes() 
  const PresentTime = `${getTime.getHours()}:${(getTime.getMinutes() <  10) ? getTime.getMinutes().toString().padStart(2, '0') : getTime.getMinutes() }`;
  return PresentTime;
}

// --- change data format yyyy-mm-dd to dd.mm.yyyy
export function ChangeDateFormat(dateStr) {
  var dArr = dateStr.split("-"); // ex input: "2010-01-18"
  return dArr[2] + "." + dArr[1] + "." + dArr[0].substring(2); // "18.01.10"
}

// --- Used to very the spot point position.
export function getPointerPosition(position) {
  // --- calculated by 100 devided by 24
  // --- position range 1 to 24
  if (position > 0 && position < 25) {
    const fixValue = 4.347826;
    const pointerPosition = `${(position - 1) * fixValue}%`;
    return pointerPosition;
  }
}
// --- maxTop = 15.9 rem and mintop 35.9rem
export function getPointerPositionHeight(presnetValue, MaxValue) {
  let totalRem;
  if (presnetValue && MaxValue) {
    let heightPer = ((presnetValue / MaxValue) * 100) / 100;
    let fixedValue = 5.52;
    totalRem = 35.6 + fixedValue - heightPer * (35.6 - 14.5);
  }
  return totalRem;
}

// --- create required format of data used in as parameter
export function dataFormatForApi(date) {
  return date.toJSON().slice(0, 10).replaceAll("-", "");
}

// --- Different API Date for today yesterday and tomorrow
export function differentAPIDate() {
  var today = new Date();
  var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  var dayBeforeyYesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000 * 2);

  // --- By using dataFormatForApi change format to 20211222
  let dataData = {
    todayDate: dataFormatForApi(today),
    tomorrowDate: dataFormatForApi(tomorrow),
    yesterdayDate: dataFormatForApi(yesterday),
    dayBeforeyYesterday: dataFormatForApi(dayBeforeyYesterday),
  };
  return dataData;
}

// --- Get WeekDayName According to date
export function getWeekdayName(date) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekdays[date.getDay()];
}

// --- Appliance Electric Cost
export function applianceElectricCost(consumption, vat, spotPrice) {
  const perHourPriceToPay = (spotPrice * consumption*(1 + vat/100))/100;
  return `${parseFloat(perHourPriceToPay).toFixed(2)}€`;
}
