import React from "react";
import xml2js from "xml2js";

export function xmlToJson(setfirst) {
  
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
  
  const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <Publication_MarketDocument xmlns="urn:iec62325.351:tc57wg16:451-3:publicationdocument:7:0">
      <mRID>919bcf6891714b919bfc06ecea247b16</mRID>
      <revisionNumber>1</revisionNumber>
      <type>A44</type>
      <sender_MarketParticipant.mRID codingScheme="A01">10X1001A1001A450</sender_MarketParticipant.mRID>
      <sender_MarketParticipant.marketRole.type>A32</sender_MarketParticipant.marketRole.type>
      <receiver_MarketParticipant.mRID codingScheme="A01">10X1001A1001A450</receiver_MarketParticipant.mRID>
      <receiver_MarketParticipant.marketRole.type>A33</receiver_MarketParticipant.marketRole.type>
      <createdDateTime>2022-12-15T08:10:21Z</createdDateTime>
      <period.timeInterval>
          <start>2022-12-14T23:00Z</start>
          <end>2022-12-15T23:00Z</end>
      </period.timeInterval>
      <TimeSeries>
          <mRID>1</mRID>
          <businessType>A62</businessType>
          <in_Domain.mRID codingScheme="A01">10YFI-1--------U</in_Domain.mRID>
          <out_Domain.mRID codingScheme="A01">10YFI-1--------U</out_Domain.mRID>
          <currency_Unit.name>EUR</currency_Unit.name>
          <price_Measure_Unit.name>MWH</price_Measure_Unit.name>
          <curveType>A01</curveType>
          <Period>
              <timeInterval>
                  <start>2022-12-14T23:00Z</start>
                  <end>2022-12-15T23:00Z</end>
              </timeInterval>
              <resolution>PT60M</resolution>
              <Point>
                  <position>1</position>
                  <price.amount>300.00</price.amount>
              </Point>
              <Point>
                  <position>2</position>
                  <price.amount>290.74</price.amount>
              </Point>
              <Point>
                  <position>3</position>
                  <price.amount>279.46</price.amount>
              </Point>
              <Point>
                  <position>4</position>
                  <price.amount>270.19</price.amount>
              </Point>
              <Point>
                  <position>5</position>
                  <price.amount>274.14</price.amount>
              </Point>
              <Point>
                  <position>6</position>
                  <price.amount>289.87</price.amount>
              </Point>
              <Point>
                  <position>7</position>
                  <price.amount>338.54</price.amount>
              </Point>
              <Point>
                  <position>8</position>
                  <price.amount>439.05</price.amount>
              </Point>
              <Point>
                  <position>9</position>
                  <price.amount>490.03</price.amount>
              </Point>
              <Point>
                  <position>10</position>
                  <price.amount>489.66</price.amount>
              </Point>
              <Point>
                  <position>11</position>
                  <price.amount>474.55</price.amount>
              </Point>
              <Point>
                  <position>12</position>
                  <price.amount>452.75</price.amount>
              </Point>
              <Point>
                  <position>13</position>
                  <price.amount>410.19</price.amount>
              </Point>
              <Point>
                  <position>14</position>
                  <price.amount>396.53</price.amount>
              </Point>
              <Point>
                  <position>15</position>
                  <price.amount>455.05</price.amount>
              </Point>
              <Point>
                  <position>16</position>
                  <price.amount>469.93</price.amount>
              </Point>
              <Point>
                  <position>17</position>
                  <price.amount>485.03</price.amount>
              </Point>
              <Point>
                  <position>18</position>
                  <price.amount>500.00</price.amount>
              </Point>
              <Point>
                  <position>19</position>
                  <price.amount>499.91</price.amount>
              </Point>
              <Point>
                  <position>20</position>
                  <price.amount>485.53</price.amount>
              </Point>
              <Point>
                  <position>21</position>
                  <price.amount>439.90</price.amount>
              </Point>
              <Point>
                  <position>22</position>
                  <price.amount>367.72</price.amount>
              </Point>
              <Point>
                  <position>23</position>
                  <price.amount>336.95</price.amount>
              </Point>
              <Point>
                  <position>24</position>
                  <price.amount>305.39</price.amount>
              </Point>
          </Period>
      </TimeSeries>
  </Publication_MarketDocument>
      `;

//   const retsult = xmlToJson(xml)

  xmlToJson(xml).then((json) => {  
    setfirst(json)    
    /* Output:
        {
          "root": {
            "item": [
              {
                "name": ["Item 1"],
                "value": ["10"]
              },
              {
                "name": ["Item 2"],
                "value": ["20"]
              }
            ]
          }
        }
        */
  });
  

// return retsult;

}