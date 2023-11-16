import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
const CustomButton = ({
  bacgroundColor,
  color,
  buttonText,
  welcomeBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: bacgroundColor,
    color: color,
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid taransparent",
    "&:hover": {
      bacgroundColor: color,
      color: bacgroundColor,
      borderColor: bacgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin:
        (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));
  return <CustomButton>{buttonText}</CustomButton>;
};
export default CustomButton;
