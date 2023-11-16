import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Container, Box } from "@mui/system";

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import React from "react";
import { indigo } from "@mui/material/colors";

const Footer = () => {
  const footerlinks = [
    {
      path: "/",
      display: "Guides",
    },

    {
      path: "/",
      display: "Serivces",
    },
    {
      path: "/",
      display: "Contact Us",
    },
  ];
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#000066",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#66B2FF",
    },
  }));

  return (
    <Box sx={{ py: 10,backgroundColor: "#1f1d27", }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#fff",
              fontWeight: "700",
              mb: "2",
            }}
          >
            Featured
          </Typography>
          {footerlinks.map((footerItem, index) => (
            <FooterLink key={index}>
              {footerItem.display} <br />
            </FooterLink>
          ))}
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#fff",
              fontWeight: "700",
              mb: "2",
            }}
          >
            Overview
          </Typography>
          <FooterLink>Location</FooterLink>
          <br />
          <FooterLink>Partnerships</FooterLink>
          <br />

          <FooterLink>Terms of use & Privacy Policies</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#fff",
              fontWeight: "700",
              mb: "2",
            }}
          >
            Grt in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#fff",
              fontWeight: "500",
              mb: "2",
            }}
          >
            Keep in touch with our social media page
          </Typography>


          <IconBox>
            <img src={fbIcon} alt="fbIcon" style={{cursor:"pointer"}} />
            <img src={twitterIcon} alt="twitterIcon"  style={{cursor:"pointer"}}/>
            <img src={instagramIcon} alt="instagramIcon"  style={{cursor:"pointer"}}/>
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
