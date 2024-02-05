import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  selectWishlistTotalPrice,
} from "@/redux/slices/wishlistSlice";
import { RootState } from "@/redux/store";
import { Card, Modal, Stack, Typography } from "@mui/material";
import WishlistItem from "./WishlistItem";

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const totalWishlistPrice = useSelector(selectWishlistTotalPrice);

  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (itemId: number) => {
    dispatch(removeFromWishlist(itemId));
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Card sx={{ minWidth: "300px", padding: 2 }}>
        <Typography variant="h2">Wishlist</Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        {wishlistItems.length > 0 ? (
          <>
            {wishlistItems.map((item) => (
              <div key={item.id}>
                {" "}
                <WishlistItem
                  {...item}
                  handleRemoveFromWishlist={handleRemoveFromWishlist}
                />
                <Typography variant="subtitle2">
                  <hr />
                </Typography>
              </div>
            ))}
            <Stack spacing={2}>
              <Typography variant="subtitle2">
                <hr />
              </Typography>
              <Typography
                variant="body1"
                component="div"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Total: ${totalWishlistPrice}
              </Typography>
            </Stack>
          </>
        ) : (
          <Typography variant="h6" mt={4}>
            Your wishlist is empty
          </Typography>
        )}
      </Card>
    </Modal>
  );
};

export default WishlistModal;
