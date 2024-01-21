"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  BadgeProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import makeStyles from "@mui/styles/makeStyles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { navItem } from "@/constants";
import CartModal from "../cart/CartModal";
import WishlistModal from "../wishlist/WishlistModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  StyledSpan1,
  StyledBadge,
  useStyles,
  StyledHeading,
  StyledSpan2,
} from "../../styles/styles";

const MobileNav = () => {};
const Navbar: React.FC = () => {
  const classes = useStyles();
  const [toggleNav, setToggleNav] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isWishlistModalOpen, setWishlistModalOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: { xs: "none", md: "block" },
          background: "#23856D",
        }}
        elevation={0}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // flexWrap: "wrap",
            }}
            disableGutters
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <LocalPhoneIcon />
                <StyledSpan1 variant="body2" noWrap>
                  (225) 555-0118
                </StyledSpan1>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MailOutlineIcon />
                <StyledSpan1 variant="body2" noWrap>
                  michelle.rivera@example.com
                </StyledSpan1>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <StyledSpan1 variant="body2" noWrap>
                Follow Us and get a chance to win 80% off
              </StyledSpan1>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" noWrap sx={{}}>
                Follow Us :
              </Typography>
              <InstagramIcon />
              <YouTubeIcon />
              <FacebookIcon />
              <TwitterIcon />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar position="static" sx={{ background: "#fff" }} elevation={1}>
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
            disableGutters
          >
            <Box>
              <StyledHeading variant="h6" noWrap sx={{}}>
                Bandage
              </StyledHeading>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              {navItem.map((item, index) => {
                return (
                  <Typography key={index} variant="body1" color="#252B42">
                    {item.path}
                  </Typography>
                );
              })}
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant="body1"
                color="#23A6F0"
                noWrap
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Login / Register
              </Typography>
              <IconButton
                aria-label="search"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <SearchIcon style={{ color: "#23A6F0" }} />
              </IconButton>
              <IconButton
                aria-label="cart"
                onClick={() => setCartModalOpen(true)}
              >
                <StyledBadge badgeContent={cartItems.length}>
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
                <StyledBadge badgeContent={wishlistItems.length}>
                  <FavoriteBorderOutlinedIcon
                    color="action"
                    style={{ color: "#23A6F0" }}
                  />
                </StyledBadge>
              </IconButton>
              <IconButton
                aria-label="cart"
                onClick={() => setToggleNav(!toggleNav)}
                sx={{ display: { xs: "defult", md: "none" } }}
              >
                <MenuIcon color="action" style={{ color: "#000" }} />
              </IconButton>
            </Box>
          </Toolbar>
          {toggleNav && (
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              {navItem.map((item, index) => {
                return (
                  <StyledSpan2 key={index} variant="body1" color="#252B42">
                    {item.path}
                  </StyledSpan2>
                );
              })}
            </Box>
          )}
        </Container>
      </AppBar>
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setCartModalOpen(false)}
      />
      <WishlistModal
        isOpen={isWishlistModalOpen}
        onClose={() => setWishlistModalOpen(false)}
      />
    </Box>
  );
};

export default Navbar;
