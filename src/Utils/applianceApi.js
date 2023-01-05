import axios from "axios";

export function applianceDataApi(setapplianceDatafromApi,setIsUpdated) {
    
    // Set format to used in axios request.
    let config = {
      method: "get",
      url: "http://sahkoapuri.fly.dev/get-device/63a43ec75089956c91b7b4a7",
      headers: {},
    };
    
    const loadApplianceData = async () => {
      try {
        // Get responce from backend server.
        const response = await axios(config);
  
        // Change recived xml to json
        if (response) {
          
             
          const data = await response.data.data[0].deviceDetails;

          (data !== undefined) && setapplianceDatafromApi(data)
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    // Execute loadPost function
    loadApplianceData();
  
  }
  
  export function updateapplianceDataApi(setapplianceDatafromApi, data1, queryParamsString ,setIsFirstRender) {
    
   
  
    const loadApplianceData = async (setIsUpdated) => {
      setIsFirstRender(true)

      try {
        // Get responce from backend server.
        const response = await axios.put(`https://sahkoapuri.fly.dev/update-electric/63a43ec75089956c91b7b4a7${queryParamsString}`, data1);

        if (response.status !== "200") {
          console.log(response.status)
          return true          
        }else {
          setIsFirstRender(true)    
          return false
        }

      } catch (error) {
        console.log(error.message);
      }
    };
    // Execute loadPost function
    return loadApplianceData();
  }