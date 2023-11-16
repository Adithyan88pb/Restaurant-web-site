import React from "react";
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import deliverImg from "../../assets/DeliveryImg.png";

import CustomButton from "../../component/CustomButton/CustomButton";
const Delivery = () => {
  const CustomeContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#1f1d27",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),

      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      <CustomeContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "35px",
              color: "white",
              fontWeight: "700",
              fontFamily: "monospace",
            }}
          >
            Super Fast Home Delivery
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#fff",
              fontWeight: "800",
              my: 3,
              fontFamily: "monospace",
            }}
          >
            Door to Door Delivery!
          </Typography>
          <CustomButton
           bacgroundColor="#0F1B4C"
           color="#fff"
            buttonText="Order Now!!"
          ></CustomButton>
        </Box>

        <img src={deliverImg} alt="delivery" style={{ maxWidth: "100%" }} />
      </CustomeContainer>
    </CustomBox>
  );
};

export default Delivery;
