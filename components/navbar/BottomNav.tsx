"use client";
import { StyledBadge } from "@/styles/styles";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { navItem } from "@/constants";

interface BottomNavProps {
  toggleNav: boolean;
  cartSize: number;
  wishlistSize: number;
  setCartModalOpen: Dispatch<SetStateAction<boolean>>;
  setWishlistModalOpen: Dispatch<SetStateAction<boolean>>;
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const BottomNav = ({
  toggleNav,
  cartSize = 0,
  wishlistSize = 0,
  setCartModalOpen,
  setWishlistModalOpen,
  setToggleNav,
}: BottomNavProps) => {
  const [cartSizeProp, setCartSizeProp] = useState(0);
  const [wishlistSizeProp, setWishlistSizeProp] = useState(0);

  useEffect(() => {
    setCartSizeProp(cartSize);
    setWishlistSizeProp(wishlistSize);
  }, [cartSize]);

  return (
    <AppBar sx={styles.appBar} elevation={1}>
      <Container>
        <Toolbar sx={styles.toolbar} disableGutters>
          <Box>
            <Typography variant="h2" noWrap>
              Bandage
            </Typography>
          </Box>
          <Box sx={styles.navItems}>
            {navItem.map((item, index) => (
              <Typography
                key={index}
                variant="h3"
                color="#737373"
                sx={{ cursor: "pointer" }}
              >
                {item.path}
              </Typography>
            ))}
          </Box>
          <Box sx={styles.flexBox} color="secondary">
            <Typography sx={styles.loginRegister}>Login / Register</Typography>
            <IconButton aria-label="search" sx={styles.searchIconButton}>
              <SearchIcon />
            </IconButton>
            <IconButton
              aria-label="cart"
              onClick={() => setCartModalOpen(true)}
            >
              <StyledBadge badgeContent={cartSizeProp}>
                <ShoppingCartOutlinedIcon
                  color="action"
                  style={{ color: "#23A6F0" }}
                />
              </StyledBadge>
            </IconButton>
            <IconButton
              aria-label="cart"
              onClick={() => setWishlistModalOpen(true)}
            >
              <StyledBadge badgeContent={wishlistSizeProp}>
                <FavoriteBorderOutlinedIcon
                  color="action"
                  style={{ color: "#23A6F0" }}
                />
              </StyledBadge>
            </IconButton>
            <IconButton
              aria-label="cart"
              onClick={() => setToggleNav(!toggleNav)}
              sx={styles.mobileMenuIconButton}
            >
              <MenuIcon color="action" />
            </IconButton>
          </Box>
        </Toolbar>
        {toggleNav && (
          <Box sx={styles.mobileNavItems}>
            {navItem.map((item, index) => (
              <Typography key={index} variant="h5" color="#252B42">
                {item.path}
              </Typography>
            ))}
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default BottomNav;

const styles = {
  appBar: {
    position: "static",
    background: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
  },
  navItems: {
    display: { xs: "none", sm: "none", md: "flex" },
    alignItems: "center",
    gap: 2,
  },
  flexBox: {
    flex: 1,
    display: "flex",
    gap: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    color: "secondary",
  },
  loginRegister: {
    variant: "h3",
    color: "secondary",
    noWrap: true,
    display: { xs: "none", md: "block" },
    cursor: "pointer",
  },
  searchIconButton: {
    display: { xs: "none", md: "block" },
    color: "#23A6F0",
  },
  mobileMenuIconButton: {
    display: { xs: "default", md: "none" },
  },
  mobileNavItems: {
    display: { xs: "flex", md: "none" },
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
};
