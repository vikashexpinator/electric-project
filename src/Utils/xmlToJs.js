import xml2js from "xml2js";
import { differentAPIDate, GetCurrentTime } from "../Utils/commonFunction";
import axios from "axios";

export function xmlToJson(setfirst) {

  // Set format to used in axios request.
  var config = {
    method: "get",
    url: "http://localhost:3005/",
    headers: {},
  };

  const loadPost = async () => {
    try {
      // Get responce from backend server.
      const response = await axios(config);

      // Change recived xml to json
      if (response) {
        const data = await xmlToJson(response.data.data);
        setfirst(data);
      }
    } catch (error) {
      console.warn(error.message);
    }
  };
  // Execute loadPost function
  loadPost();

  function xmlToJson(xml) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(xml, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

// const presentTime = GetCurrentTime().split(":")[0];
// const { todayDate, yesterdayDate, dayBeforeyYesterday } = differentAPIDate();


// let url;

// if (presentTime > 1) {
//   url = `https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=${yesterdayDate}2300&periodEnd=${todayDate}2300`;
// } else {
//   url = `https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=${dayBeforeyYesterday}2300&periodEnd=${yesterdayDate}2300`;
// }

// const headers = {
//   'Accept': 'text/html,application/xhtml+xml,application/xml, application/json, text/plain, */*; ',
//   'Content-Type': 'application/xml, application/json',
//   'access-control-allow-headers': '*',
//   'access-control-expose-headers': '*',
//   'access-control-allow-credentials': true,
//   'access-control-allow-methods': '*',
//   'Access-Control-Allow-Origin': `http://localhost:3000`,
// };

// let urla = `https://web-api.tp.entsoe.eu/api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=${yesterdayDate}2300&periodEnd=${todayDate}2300`
// axios.get(urla, { headers })
//   .then(response => {
//     console.log(response);
//     // Do something with the response data
//   })
//   .catch(error => {
//     // Handle any errors
//   });

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

//   const xml = `
//   <Publication_MarketDocument xmlns="urn:iec62325.351:tc57wg16:451-3:publicationdocument:7:0">
// <mRID>67a9e8f9f0c144b3ac9d791395847cf2</mRID>
// <revisionNumber>1</revisionNumber>
// <type>A44</type>
// <sender_MarketParticipant.mRID codingScheme="A01">10X1001A1001A450</sender_MarketParticipant.mRID>
// <sender_MarketParticipant.marketRole.type>A32</sender_MarketParticipant.marketRole.type>
// <receiver_MarketParticipant.mRID codingScheme="A01">10X1001A1001A450</receiver_MarketParticipant.mRID>
// <receiver_MarketParticipant.marketRole.type>A33</receiver_MarketParticipant.marketRole.type>
// <createdDateTime>2022-12-21T07:02:39Z</createdDateTime>
// <period.timeInterval>
// <start>2022-12-20T23:00Z</start>
// <end>2022-12-21T23:00Z</end>
// </period.timeInterval>
// <TimeSeries>
// <mRID>1</mRID>
// <businessType>A62</businessType>
// <in_Domain.mRID codingScheme="A01">10YFI-1--------U</in_Domain.mRID>
// <out_Domain.mRID codingScheme="A01">10YFI-1--------U</out_Domain.mRID>
// <currency_Unit.name>EUR</currency_Unit.name>
// <price_Measure_Unit.name>MWH</price_Measure_Unit.name>
// <curveType>A01</curveType>
// <Period>
// <timeInterval>
// <start>2022-12-20T23:00Z</start>
// <end>2022-12-21T23:00Z</end>
// </timeInterval>
// <resolution>PT60M</resolution>
// <Point>
// <position>1</position>
// <price.amount>177.74</price.amount>
// </Point>
// <Point>
// <position>2</position>
// <price.amount>174.76</price.amount>
// </Point>
// <Point>
// <position>3</position>
// <price.amount>174.64</price.amount>
// </Point>
// <Point>
// <position>4</position>
// <price.amount>167.93</price.amount>
// </Point>
// <Point>
// <position>5</position>
// <price.amount>168.96</price.amount>
// </Point>
// <Point>
// <position>6</position>
// <price.amount>180.00</price.amount>
// </Point>
// <Point>
// <position>7</position>
// <price.amount>273.63</price.amount>
// </Point>
// <Point>
// <position>8</position>
// <price.amount>304.19</price.amount>
// </Point>
// <Point>
// <position>9</position>
// <price.amount>299.27</price.amount>
// </Point>
// <Point>
// <position>10</position>
// <price.amount>299.99</price.amount>
// </Point>
// <Point>
// <position>11</position>
// <price.amount>300.00</price.amount>
// </Point>
// <Point>
// <position>12</position>
// <price.amount>300.00</price.amount>
// </Point>
// <Point>
// <position>13</position>
// <price.amount>300.09</price.amount>
// </Point>
// <Point>
// <position>14</position>
// <price.amount>299.99</price.amount>
// </Point>
// <Point>
// <position>15</position>
// <price.amount>299.99</price.amount>
// </Point>
// <Point>
// <position>16</position>
// <price.amount>301.70</price.amount>
// </Point>
// <Point>
// <position>17</position>
// <price.amount>300.00</price.amount>
// </Point>
// <Point>
// <position>18</position>
// <price.amount>288.22</price.amount>
// </Point>
// <Point>
// <position>19</position>
// <price.amount>243.52</price.amount>
// </Point>
// <Point>
// <position>20</position>
// <price.amount>232.48</price.amount>
// </Point>
// <Point>
// <position>21</position>
// <price.amount>211.19</price.amount>
// </Point>
// <Point>
// <position>22</position>
// <price.amount>188.79</price.amount>
// </Point>
// <Point>
// <position>23</position>
// <price.amount>171.00</price.amount>
// </Point>
// <Point>
// <position>24</position>
// <price.amount>140.09</price.amount>
// </Point>
// </Period>
// </TimeSeries>
// </Publication_MarketDocument>
//       `;

// const response = await axios.get(url);
// for static data
// const data = await xmlToJson(xml)
// setfirst(data);

//   const xml = `
//   <Publication_MarketDocument xmlns="urn:iec62325.351:tc57wg16:451-3:publicationdocument:7:0">
// <mRID>dc34735a50ef46ec900d4e72c98a9ebf</mRID>
// <revisionNumber>1</revisionNumber>
// <type>A44</type>
// <sender_MarketParticipant.mRID codingScheme="A01">10X1001A1001A450</sender_MarketParticipant.mRID>
// <sender_MarketParticipant.marketRole.type>A32</sender_MarketParticipant.marketRole.type>
// <receiver_MarketParticipant.mRID codingScheme="A01">10X1001A1001A450</receiver_MarketParticipant.mRID>
// <receiver_MarketParticipant.marketRole.type>A33</receiver_MarketParticipant.marketRole.type>
// <createdDateTime>2022-12-16T06:18:55Z</createdDateTime>
// <period.timeInterval>
// <start>2022-12-15T23:00Z</start>
// <end>2022-12-16T23:00Z</end>
// </period.timeInterval>
// <TimeSeries>
// <mRID>1</mRID>
// <businessType>A62</businessType>
// <in_Domain.mRID codingScheme="A01">10YFI-1--------U</in_Domain.mRID>
// <out_Domain.mRID codingScheme="A01">10YFI-1--------U</out_Domain.mRID>
// <currency_Unit.name>EUR</currency_Unit.name>
// <price_Measure_Unit.name>MWH</price_Measure_Unit.name>
// <curveType>A01</curveType>
// <Period>
// <timeInterval>
// <start>2022-12-15T23:00Z</start>
// <end>2022-12-16T23:00Z</end>
// </timeInterval>
// <resolution>PT60M</resolution>
// <Point>
// <position>1</position>
// <price.amount>296.30</price.amount>
// </Point>
// <Point>
// <position>2</position>
// <price.amount>288.12</price.amount>
// </Point>
// <Point>
// <position>3</position>
// <price.amount>280.19</price.amount>
// </Point>
// <Point>
// <position>4</position>
// <price.amount>270.33</price.amount>
// </Point>
// <Point>
// <position>5</position>
// <price.amount>282.55</price.amount>
// </Point>
// <Point>
// <position>6</position>
// <price.amount>296.35</price.amount>
// </Point>
// <Point>
// <position>7</position>
// <price.amount>347.59</price.amount>
// </Point>
// <Point>
// <position>8</position>
// <price.amount>470.22</price.amount>
// </Point>
// <Point>
// <position>9</position>
// <price.amount>543.49</price.amount>
// </Point>
// <Point>
// <position>10</position>
// <price.amount>565.01</price.amount>
// </Point>
// <Point>
// <position>11</position>
// <price.amount>546.80</price.amount>
// </Point>
// <Point>
// <position>12</position>
// <price.amount>547.42</price.amount>
// </Point>
// <Point>
// <position>13</position>
// <price.amount>498.13</price.amount>
// </Point>
// <Point>
// <position>14</position>
// <price.amount>474.33</price.amount>
// </Point>
// <Point>
// <position>15</position>
// <price.amount>467.71</price.amount>
// </Point>
// <Point>
// <position>16</position>
// <price.amount>465.14</price.amount>
// </Point>
// <Point>
// <position>17</position>
// <price.amount>478.55</price.amount>
// </Point>
// <Point>
// <position>18</position>
// <price.amount>449.82</price.amount>
// </Point>
// <Point>
// <position>19</position>
// <price.amount>429.10</price.amount>
// </Point>
// <Point>
// <position>20</position>
// <price.amount>467.80</price.amount>
// </Point>
// <Point>
// <position>21</position>
// <price.amount>305.31</price.amount>
// </Point>
// <Point>
// <position>22</position>
// <price.amount>299.91</price.amount>
// </Point>
// <Point>
// <position>23</position>
// <price.amount>240.00</price.amount>
// </Point>
// <Point>
// <position>24</position>
// <price.amount>104.83</price.amount>
// </Point>
// </Period>
// </TimeSeries>
// </Publication_MarketDocument>
//       `;

// xmlToJson(xml).then((json) => {
//   setfirst(json);
//   /* Output:
//       {
//         "root": {
//           "item": [
//             {
//               "name": ["Item 1"],
//               "value": ["10"]
//             },
//             {
//               "name": ["Item 2"],
//               "value": ["20"]
//             }
//           ]
//         }
//       }
//       */
// });

// return retsult;

// HTTP/1.1 200 OK
// Date: Wed, 21 Dec 2022 04:27:36 GMT
// Server: Apache
// Strict-Transport-Security: max-age=31536000 ; includeSubDomains
// X-Powered-By: Undertow/1
// Keep-Alive: timeout=5, max=100
// Connection: Keep-Alive
// Transfer-Encoding: chunked
// Content-Type: text/xml
// access-control-allow-headers: *
// access-control-expose-headers: *
// access-control-allow-credentials: true
// access-control-allow-methods: *
// Access-Control-Allow-Origin: http://localhost:3000

// GET /api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=202212202300&periodEnd=202212212300 HTTP/1.1
// Accept: application/json, text/plain, */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9
// Connection: keep-alive
// Host: web-api.tp.entsoe.eu
// Origin: http://localhost:3000
// Referer: http://localhost:3000/
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: cross-site
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
// sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"

// GET /api?securityToken=dc731ef0-4582-408b-9cad-c9dbebbe306f&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=202212202300&periodEnd=202212212300 HTTP/1.1
// Accept: application/json, text/plain, */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9
// Connection: keep-alive
// Host: web-api.tp.entsoe.eu
// Origin: http://localhost:3000
// Referer: http://localhost:3000/
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: cross-site
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
// sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"


// Looks good. Few notes:
// 1. Still some way to go compared to designs but good progress.
// 2. We can totally skip / remove the first language selection screen since we have only fonnish market. By default lets land to finnish language site.
// 3. The xml was my idea on how to edit the content on site (ie. Add new appliances or change their consumption (ie. If i want to change the coffee maker to vacuum cleaner i would have a way to change it instead of bothering you with it).
// However you can propose how you would solve this?




