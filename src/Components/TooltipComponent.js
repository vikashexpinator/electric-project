// import { textAlign } from "@mui/system";

  function CustomTooltip({ payload, label, active }) {

    if (active) {
      return (
        <div className="custom-tooltip" style={{width: "140px", height: "63px", background: "linear-gradient(180deg, #59F2D0 0%, #56CAE6 100%)", textAlign: "center", border: "1px solid #FFFFFF", opacity: "0.9", borderRadius: "10px" }}>
        <p className="label" style={{fontFamily: 'Fredoka',
        fontStyle: "normal",
        // fontWeight: "500",
        fontSize: "16px",
        // lineHeight: "30px",
        textAlign: "center",
        color: "#11014A"}}>Spot now <br/>{payload && payload[0]?.value}</p>
        </div>
      );
    }
  
    return null;
  }

  export default CustomTooltip;

// fontFamily: 'Fredoka,
// fontStyle: "normal",
// fontWeight: "500",
// fontSize: "25px",
// lineHeight: "30px",
// textAlign: "center",
// color: "#11014A"