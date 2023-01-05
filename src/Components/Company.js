
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import {
  applianceDataApi,
  updateapplianceDataApi,
} from "../Utils/applianceApi";



function Company() {
  // const deviceDetailsState = {
  //   vat: "10",
  //   deviceName1: "Sauna",
  //   Consumption1: "12",
  //   deviceName2: "Owen",
  //   Consumption2: "12",
  //   deviceName3: "Electric Car",
  //   Consumption3: "12",
  //   deviceName4: "Dish Washer",
  //   Consumption4: "12",
  //   deviceName5: "Washing Machine",
  //   Consumption5: "12",
  //   deviceName6: "Laundry Dryer",
  //   Consumption6: "12",
  //   deviceName7: "Gaming PC",
  //   Consumption7: "12",
  //   deviceName8: "Coffee Maker",
  //   Consumption8: "12",
  // };

  const [deviceDetails, SetDeviceDetails] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(false);

  const [queryParams, setQueryParams] = useState({
    username: "username",
    password: "password",
  });

  useEffect(() => {
    applianceDataApi(SetDeviceDetails, setIsUpdated);
  }, []);

  useEffect(() => {
 
  }, [deviceDetails]);

  const handleSubmit = async () => {
    const data1 = { deviceDetails: { ...deviceDetails } };
    let queryParamsString = `?adminName=${queryParams.username}&password=${queryParams.password}`;
    
    const updateResponce = await updateapplianceDataApi(SetDeviceDetails, data1, queryParamsString ,setIsFirstRender);

    setIsUpdated(updateResponce);

  };

  const handleInput = (evt) => {
    const { name, value } = evt.target;
    SetDeviceDetails({ ...deviceDetails, [name]: value });
  };

  const handleInputAdmin = (evt) => {
    const { name, value } = evt.target;
    setQueryParams({ ...queryParams, [name]: value });
  };

  return (
    <React.Fragment>
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        name="username"
    
        onChange={handleInputAdmin}
        value={queryParams.username}
        label={!deviceDetails ? "device" : ""}
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        name="password"
       
        onChange={handleInputAdmin}
        value={queryParams.password}
        label={!deviceDetails ? "consumption" : ""}
        variant="outlined"
      />
      {deviceDetails !== undefined && (
        <div className="form-part custom-company">
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="vat"
   
              value={deviceDetails.vat}
              onChange={handleInput}
              label={!deviceDetails ? "vat" : ""}
              variant="outlined"
            />
            <br />
          </div>

          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="deviceName1"

              value={deviceDetails.deviceName1}
              onChange={handleInput}
              label={!deviceDetails ? "device" : ""}
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="Consumption1"
        
              onChange={handleInput}
              value={deviceDetails.Consumption1}
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="deviceName2"
  
              onChange={handleInput}
              value={deviceDetails.deviceName2}
              label={!deviceDetails ? "device" : ""}
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="Consumption2"

              onChange={handleInput}
              value={deviceDetails.Consumption2}
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="deviceName3"
  
              onChange={handleInput}
              value={deviceDetails.deviceName3}
              label={!deviceDetails ? "device" : ""}
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="Consumption3"
  
              onChange={handleInput}
              value={deviceDetails.Consumption3}
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="deviceName4"
  
              onChange={handleInput}
              value={deviceDetails.deviceName4}
              label={!deviceDetails ? "device" : ""}
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="Consumption4"
       
              onChange={handleInput}
              value={deviceDetails.Consumption4}
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="deviceName5"
 
              onChange={handleInput}
              value={deviceDetails.deviceName5}
              label={!deviceDetails ? "device" : ""}
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="Consumption5"
       
              onChange={handleInput}
              value={deviceDetails.Consumption5}
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="deviceName6"
    
              onChange={handleInput}
              value={deviceDetails.deviceName6}
              label={!deviceDetails ? "device" : ""}
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="Consumption6"
  
              onChange={handleInput}
              value={deviceDetails.Consumption6}
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="deviceName7"
  
              onChange={handleInput}
              value={deviceDetails.deviceName7}
              label={!deviceDetails ? "device" : ""}
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="Consumption7"
     
              onChange={handleInput}
              value={deviceDetails.Consumption7}
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="deviceName8"
         
              onChange={handleInput}
              value={deviceDetails.deviceName8}
              label={!deviceDetails ? "device" : ""}
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="Consumption8"
       
              onChange={handleInput}
              value={deviceDetails.Consumption8}
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          {isUpdated ? (
            <Typography
              sx={{ color: "green", fontSize: "16px", paddingLeft: "35px" }}
              variant="h5"
            >
              Appliance Data Updated!{" "}
            </Typography>
          ) : isFirstRender && (
            <Typography
              sx={{ color: "red", fontSize: "16px", paddingLeft: "35px" }}
              variant="h5"
            >
              UserName or password don't matched!! {" "}
            </Typography>
          )}

          <Button
            className="submit-btn"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ padding: "5px", marginLeft: "30px", margin: "" }}
          >
            save
          </Button>
        </div>
      )}
    </React.Fragment>
  );
}

export default Company;



