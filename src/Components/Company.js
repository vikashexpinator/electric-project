// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { applianceDataApi, updateapplianceDataApi } from "../Utils/applianceApi";

import axios from "axios";
// import ExportApi from "../../Api/ExportApi";
// import { ToastContainer, toast } from 'react-toastify';
// import MenuItem from "@mui/material/MenuItem";

function Company() {
  const deviceDetailsState = {
    vat: "10",
    deviceName1: "Sauna",
    Consumption1: "12",
    deviceName2: "Owen",
    Consumption2: "12",
    deviceName3: "Electric Car",
    Consumption3: "12",
    deviceName4: "Dish Washer",
    Consumption4: "12",
    deviceName5: "Washing Machine",
    Consumption5: "12",
    deviceName6: "Laundry Dryer",
    Consumption6: "12",
    deviceName7: "Gaming PC",
    Consumption7: "12",
    deviceName8: "Coffee Maker",
    Consumption8: "12",
  };

  const [deviceDetails, SetDeviceDetails] = useState({});
  const [isUpdated, setIsUpdated] = useState(false) 



  useEffect(() => {
    applianceDataApi(SetDeviceDetails);
  }, []);

  useEffect(() => {
    // deviceDetails && console.log(deviceDetails)
  }, [deviceDetails]);

  const handleSubmit = async () => {
    const data1 = { deviceDetails: { ...deviceDetails } };
console.warn("data1....", data1);
    updateapplianceDataApi(SetDeviceDetails,data1)
    setIsUpdated(true)
    // ExportApi.AddCompany(data1)
    //   .then((resp) => {
    //     console.log(resp)
    //     if (resp.data) {
    //       console.log("dataaa", resp);
    //       setFormInput({
    //         name: "",
    //         services: "",
    //         businessStreetAddress: "",
    //         officeAddress: "",
    //         uenIssueDate: "",
    //         projects: "",
    //         incorporationDate: "",
    //         directoryReferenceNo: "",
    //         caseTrust: "",
    //         businessOwnerName: "",
    //         applicationExpiryDate: "",
    //         typeOfWorks: "",
    //         accumaltedDemeritPoints: "",
    //         infrigmentHistory: "",
    //         paragraphAboutCompany: "",
    //         webAddress: "",
    //         facebook: "",
    //         linkedIn: "",
    //         instagram: "",
    //         uen: "",
    //         address: "",
    //         status: "",
    //         industry: "",
    //         location: "",
    //         review: "",
    //         url: "",
    //         rating: "",
    //       });

    //       toast.success("Company Added.");
    //     }
    //   })
    //   .catch((err) => console.log(err));

    // const res = await axios.post("http://localhost:3005/create/company", data1);

    // console.log("response", res);
  };

  const handleInput = (evt) => {
    const { name, value } = evt.target;
    SetDeviceDetails({ ...deviceDetails, [name]: value });
  };


  return (
    <React.Fragment>
      {deviceDetails !== undefined && (
        <div className="form-part custom-company">
          
          <div className="custom-filed applyFlex">
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="vat"
              defaultValue={deviceDetails && deviceDetails.vat}
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
              defaultValue={deviceDetails && deviceDetails.vat}
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
              defaultValue={deviceDetails.Consumption1}
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
              defaultValue={deviceDetails.deviceName2}
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
              defaultValue={deviceDetails.Consumption2}
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
              defaultValue={deviceDetails.deviceName3}
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
              defaultValue={deviceDetails.Consumption3}
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
              defaultValue={deviceDetails.deviceName4}
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
              defaultValue={deviceDetails.Consumption4}
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
              defaultValue={deviceDetails.deviceName5}
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
              defaultValue={deviceDetails.Consumption5}
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
              defaultValue={deviceDetails.deviceName6}
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
              defaultValue={deviceDetails.Consumption6}
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
              defaultValue={deviceDetails.deviceName7}
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
              defaultValue={deviceDetails.Consumption7}
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
              defaultValue={deviceDetails.deviceName8}
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
              defaultValue={deviceDetails.Consumption8}
              onChange={handleInput}
              value={deviceDetails.Consumption8}
              
              label={!deviceDetails ? "consumption" : ""}
              variant="outlined"
            />
            <br />
          </div>
          {isUpdated ? <Typography sx={{ color: "green", fontSize: "16px", paddingLeft: "35px" }} variant="h5">Appliance Data Updated! </Typography> :""}
         
          <Button
            className="submit-btn"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{padding: "5px", marginLeft: "30px", margin:"" }}
          >
            save
          </Button>

        </div>
      )}
    </React.Fragment>
  );
}

export default Company;

// const deviceDetails = [
//   {
//     deviceName: "Saunaaa",
//     Consumption: "12",
//     vat: "10",
//   },
//   {
//     deviceName: "Owen",
//     Consumption: "12",
//     vat: "10",
//   },
//   {
//     deviceName: "ElectricCar",
//     Consumption: "12",
//     vat: "10",
//   },
//   {
//     deviceName: "Dishwasher",
//     Consumption: "12",
//     vat: "10",
//   },
//   {
//     deviceName: "Washingmachine",
//     Consumption: "12",
//     vat: "10",
//   },
//   {
//     deviceName: "GamingPC",
//     Consumption: "12",
//     vat: "10",
//   },
//   {
//     deviceName: "Coffeemaker",
//     Consumption: "12",
//     vat: "10",
//   },
// ];

// let newData = deviceDetails.map(data => data.Consumption data.deviceName)
// const InputFieldComponent = (formInput, index) => {
//   return (
//     <div key={index} id={index} className="custom-filed applyFlex">
//       <TextField
//         style={{ width: "200px", margin: "5px" }}
//         type="text"
//         name="name"
//         defaultValue={formInput.deviceName}
//         onChange={handleInput}
//         label="device"
//         variant="outlined"
//       />
//       <br />
//       <TextField
//         style={{ width: "200px", margin: "5px" }}
//         type="text"
//         name="services"
//         defaultValue={formInput.Consumption}
//         onChange={handleInput}
//         label="consumption"
//         variant="outlined"
//       />
//       <br />
//     </div>
//   );
// };

// // here we use our new component to generate new field.
// let newData = deviceDetails.map((data, index) =>
//   InputFieldComponent(data, index)
// );
