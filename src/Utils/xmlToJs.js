import xml2js from "xml2js";

import axios from "axios";

export function xmlToJson(setfirst) {

  // Set format to used in axios request.
  var config = {
    method: "get",
    url: "https://sahkoapuri.fly.dev/",
    headers: {},
  };
  // http://13.53.179.35:1234/

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
      console.log(error.message);
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





