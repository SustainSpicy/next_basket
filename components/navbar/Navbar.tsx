"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";

import CartModal from "../cart/CartModal";
import WishlistModal from "../wishlist/WishlistModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Navbar: React.FC = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isWishlistModalOpen, setWishlistModalOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopNav />
      <BottomNav
        {...{
          toggleNav,
          cartSize: cartItems.length,
          wishlistSize: wishlistItems.length,
          setCartModalOpen,
          setWishlistModalOpen,
          setToggleNav,
        }}
      />
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
