import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";


export default function Welcome({ setIsWelcomePage}) {
  const { t, i18n } = useTranslation();
  const langs = {
    en: { nativeName: "Finland (English)" },
    su: { nativeName: "Suomi (suomeksi)" },
  };
  
  return (
    <>
      <Box className="bluecolor" align="left" sx={{ py: 2, px: 5 }}>
        <a>
          <img src={Logo} alt="" />
        </a>
      </Box>
      <Box className="gradientcolor" align="center" sx={{ p: 5 }}>
        <Box sx={{ width: "800px", height: "calc(100vh - 252px)" }}>
          <Typography
            sx={{
              fontSize: "60px",
              color: "white",
              fontFamily: "Fredoka",
              mt: "60px",
              mb: "15px",
            }}
          >
            Tervetulao / Welcome
          </Typography>
          <Box
            sx={{
              background: "white",
              mb: "50px",
              p: "30px 175px",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{ fontSize: "30px", color: "#1B80C9" }}
              color="text.secondary"
            >
              Step 1/3
            </Typography>
            <Typography sx={{ fontSize: "26px", color: "#3A3535", my: "10px" }}>
              Choose your market & Language Valitse kieli ja maa
            </Typography>

            {Object.keys(langs).map((lng) => (

              <Button
              key={lng}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
              sx={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                maxWidth: "367px",
                width: "367px",
                height: "80px",
                fontSize: "26px",
                display: "block",
                my: "20px",
                borderRadius: "50px",
                px: "30px",
                color: "#000",
                fontFamily: "Fredoka One",
                border: "2px solid #313EF7",
              }}
            >
            {langs[lng].nativeName}
            </Button>

              // <button
              //   key={lng}
              //   style={{
              //     fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              //   }}
              //   type="submit"
              //   onClick={() => i18n.changeLanguage(lng)}
              // >
              //   {langs[lng].nativeName}
              // </button>
            ))}
{/*
              <Button
              sx={{
                fontWeight: "100",
                maxWidth: "367px",
                width: "367px",
                height: "80px",
                fontSize: "26px",
                display: "block",
                my: "20px",
                borderRadius: "50px",
                px: "30px",
                color: "#000",
                fontFamily: "Fredoka One",
                border: "2px solid #313EF7",
              }}
            >
              Suomi(suomeksi)
            </Button>
            <Button
              sx={{
                fontWeight: "100",
                maxWidth: "367px",
                width: "367px",
                height: "80px",
                fontSize: "26px",
                display: "block",
                my: "20px",
                borderRadius: "50px",
                px: "30px",
                color: "#000",
                fontFamily: "Fredoka One",
                border: "2px solid #313EF7",
              }}
            >
              Finland(English)
            </Button>
            */}
          </Box>
          <Button
            onClick={e => setIsWelcomePage(false)}
            sx={{
              fontWeight: "100",
              maxWidth: "300px",
              width: "367px",
              height: "80px",
              fontSize: "26px",
              display: "block",
              my: "20px",
              borderRadius: "50px",
              px: "20px",
              color: "#fff",
              fontFamily: "Fredoka One",
              border: "2px solid #11014A",
              background: "#11014A !important",
            }}
          >
          {t("description.continue")}
          </Button>
        </Box>
      </Box>
    </>
  );
}
