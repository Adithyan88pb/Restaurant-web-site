import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../../assets/ambience.jpg";

const Ambience = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  const LargeText = styled(Box)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",

    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));
  const SmallText = styled(Box)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));
  const TextFlexBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));
  const Divider = styled(Box)(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#1f1d27",

    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={houseCard} alt="" style={{ maxWidth: "100%" }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              You'we found a ambiance you love.
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#5A6473", lineHeight: "27px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              nesciunt obcaecati sequi rem porro ex quibusdam eos voluptate vero
              non.
            </Typography>
          </Box>
        </CustomBox>
        <TextFlexBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>250+</LargeText>
            <SmallText>Dishes</SmallText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>300+</LargeText>
            <SmallText>Trusted Clients</SmallText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>450+</LargeText>
            <SmallText>Delivery per Day</SmallText>
          </Box>
        </TextFlexBox>
      </Container>
    </Box>
  );
};

export default Ambience;
