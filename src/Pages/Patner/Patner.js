import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

import logoImg from "../../assets/logo.png";
import starImg from "../../assets/Star.png";
import logosImg from "../../assets/logos.png";
const Patner = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ pt:"70px", backgroundColor:" #0c2e47" }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt="logo" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#ffff",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            More than 45,00 trust Techflix
          </Typography>
        </CustomBox>

        <Box>
          <img src={starImg} alt="logo" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#ffff",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={logosImg} alt="logo" />
      </Container>
    </Box>
  );
};

export default Patner;
