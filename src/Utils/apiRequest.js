import {differentAPIDate, GetCurrentTime} from '../Utils/commonFunction'

export async function apiRequrestForElectricPrice () {
  const presentTime = GetCurrentTime().split(":")[0];
  const {todayDate, tomorrowDate, yesterdayDate, dayBeforeyYesterday} = differentAPIDate()
  
  console.warn("differentAPIDate", dayBeforeyYesterday, yesterdayDate, todayDate, tomorrowDate)

  // dataFormatForApi()

  // var myHeaders = new Headers();
  // myHeaders.append("SECURITY_TOKEN", "dc731ef0-4582-408b-9cad-c9dbebbe306f");
  // myHeaders.append("Access-Control-Allow-Origin", "*");

  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };

  let url;
  if (presentTime > 1){
    url = `https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=${yesterdayDate}2300&periodEnd=${todayDate}2300`
  }else{
    url = `https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=${dayBeforeyYesterday}2300&periodEnd=${yesterdayDate}2300`
  }  
  
  const data = await fetch(url);
  // data && setElectricPriceData(data) 
  console.log(data)
}

