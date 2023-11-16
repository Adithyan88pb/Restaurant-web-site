import { styled } from "@mui/system";
import { Box, Typography, Container } from "@mui/material";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import logoImage from "../../assets/5502294-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
function Header() {
  const [moblieMenu, setMoblieMenu] = useState({ left: false });

  const navgate = useNavigate();
  const toggleDraewr = (anchor, open) => (event) => {
    if (
      event.type == "keyDown" &&
      (event.type == "Tab" || event.type == "Shift")
    ) {
      return;
    }
    setMoblieMenu({ ...moblieMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#1a161a",height:"1000px"
      }}
      role="presentation"
      onClick={toggleDraewr(anchor, false)}
      onKeydown={toggleDraewr(anchor, false)}
    >
      <List >
        {nav_titles.map((item, index) => (
          <ListItem
            key={item.index}
            disablePadding
            onClick={() => navgate(item.path)}
          >
            <ListItemButton  sx={{color:"#fff"}}>
              <ListItemIcon sx={{color:"#fff"}}>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/dishes",
      display: "Dishes",
    },
    {
      path: "/services",
      display: "Serivces",
    },
    {
      path: "/about",
      display: "About Us",
    },
  ];

  const NavBarLinkBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const NavBarLink = styled(Typography)(() => ({
    fontSize: "16px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  }));
  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "70px",
    [theme.breakpoints.down("md")]: {
      width: "40px",
    },
  }));
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        maxWidth: "auto",
        // backgroundColor: "#FED801",
        backgroundColor: "#1f1d27",
        marginLeft: "0px",
        marginBottom: "-24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CustomMenuIcon onClick={toggleDraewr("left", true)} />
          <Drawer
            anchor="left"
            open={moblieMenu["left"]}
            onClose={toggleDraewr("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavBarLogo src={logoImage} />
        </Box>
        <NavBarLinkBox>
          {nav_titles.map((item, index) => (
            <NavBarLink variant="body2" onClick={() => navgate(item.path)}>
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinkBox>
      </Box>

      {/* button box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavBarLink variant="body2">Sign Up</NavBarLink>
        <CustomButton
          bacgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register "
        />
      </Box>
    </Box>
  );
}

export default Header;
