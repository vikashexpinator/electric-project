import axios from "axios";

export function applianceDataApi(setapplianceDatafromApi) {
    
    // Set format to used in axios request.
    let config = {
      method: "get",
      url: "http://localhost:3005/get-device/63a43ec75089956c91b7b4a7",
      headers: {},
    };
  
    const loadApplianceData = async () => {
      try {
        // Get responce from backend server.
        const response = await axios(config);
  
        // Change recived xml to json
        if (response) {
            // console.log(response.data.data[0].deviceDetails)
             
          const data = await response.data.data[0].deviceDetails;

          (data !== undefined) && setapplianceDatafromApi(data);
        }
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Execute loadPost function
    loadApplianceData();
  
  }

  
  export function updateapplianceDataApi(setapplianceDatafromApi, data1, setIsUpdated) {
    
    // Set format to used in axios request.
    // let config = {
    //   method: "put",
    //   url: "http://localhost:3005/update-electric/63a43ec75089956c91b7b4a7",
    //   headers: {},
    //   body: data1,
    // };
  
    const loadApplianceData = async () => {
      try {
        // Get responce from backend server.
        const response = await axios.put("http://localhost:3005/update-electric/63a43ec75089956c91b7b4a7", data1);
  
        // Change recived xml to json
        if (response) {
            // console.log(response.data.data[0].deviceDetails)
             
          const data = await response.data.data[0].deviceDetails;
          data && setIsUpdated(true)
        //   (data !== undefined) && setapplianceDatafromApi(data);
        }
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Execute loadPost function
    loadApplianceData();
  
  }