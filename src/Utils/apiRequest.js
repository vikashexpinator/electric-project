// import {differentAPIDate, GetCurrentTime} from '../Utils/commonFunction'

// export async function apiRequrestForElectricPrice() {
  
//   const presentTime = GetCurrentTime().split(":")[0];
//   const {todayDate, yesterdayDate, dayBeforeyYesterday} = differentAPIDate()
//   let url;

//   // set condition to update request url based on time
//   if (presentTime > 1){
//     url = `https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=${yesterdayDate}2300&periodEnd=${todayDate}2300`
//   }else{
//     url = `https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=${dayBeforeyYesterday}2300&periodEnd=${yesterdayDate}2300`
//   }
  

//   // const data = await fetch(url);
//   // data && setElectricPriceData(data)

//   // var myHeaders = new Headers();
//   // myHeaders.append("Content-Type", "application/xml");
//   // myHeaders.append("SECURITY_TOKEN", "dc731ef0-4582-408b-9cad-c9dbebbe306f");
//   // // myHeaders.append("Access-Control-Allow-Origin", "*");
  
//   // var raw = "<StatusRequest_MarketDocument xmlns=\"urn:iec62325.351:tc57wg16:451-5:statusrequestdocument:4:0\">\r\n    <mRID>SampleCallToRestfulApi</mRID>\r\n    <type>A59</type>\r\n    <sender_MarketParticipant.mRID codingScheme=\"A01\">10X1001A1001A450</sender_MarketParticipant.mRID>\r\n    <sender_MarketParticipant.marketRole.type>A07</sender_MarketParticipant.marketRole.type>\r\n    <receiver_MarketParticipant.mRID codingScheme=\"A01\">10X1001A1001A450</receiver_MarketParticipant.mRID>\r\n    <receiver_MarketParticipant.marketRole.type>A32</receiver_MarketParticipant.marketRole.type>\r\n    <createdDateTime>2016-01-10T13:00:00Z</createdDateTime>\r\n    <AttributeInstanceComponent>\r\n        <attribute>DocumentType</attribute>\r\n        <attributeValue>A44</attributeValue>\r\n    </AttributeInstanceComponent>\r\n    <AttributeInstanceComponent>\r\n        <attribute>In_Domain</attribute>\r\n        <attributeValue>10YCZ-CEPS-----N</attributeValue>\r\n    </AttributeInstanceComponent>\r\n    <AttributeInstanceComponent>\r\n        <attribute>Out_Domain</attribute>\r\n        <attributeValue>10YCZ-CEPS-----N</attributeValue>\r\n    </AttributeInstanceComponent>\r\n    <AttributeInstanceComponent>\r\n        <attribute>TimeInterval</attribute>\r\n        <attributeValue>2016-12-30T23:00Z/2016-12-31T23:00Z</attributeValue>\r\n    </AttributeInstanceComponent>\r\n</StatusRequest_MarketDocument>";
  
//   // var requestOptions = {
//   //   method: 'POST',
//   //   headers: myHeaders,
//   //   body: raw,
//   //   redirect: 'follow',
//   //   mode: 'no-cors'
//   // };
  
//   // fetch("https://web-api.tp.entsoe.eu/api", requestOptions)
//   //   .then(response => response.text())
//   //   .then(result => console.log(result))
//   //   .catch(error => console.log('error', error));
// }


// - Update pointer price to card price (make dynamic).
// - Create function to get date format used in as parameter.
// - Set condition to update request URL based on time.
 
