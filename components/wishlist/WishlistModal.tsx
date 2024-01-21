import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  selectWishlistTotalPrice,
} from "@/redux/slices/wishlistSlice";
import { RootState } from "@/redux/store";
import { Card, Modal, Stack, Typography } from "@mui/material";
import { StyledHeading, StyledSpan2 } from "@/styles/styles";
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
        <StyledHeading variant="h6">Wishlist</StyledHeading>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        {wishlistItems.length > 0 ? (
          <>
            {wishlistItems.map((item) => (
              <>
                {" "}
                <WishlistItem
                  key={item.id}
                  {...item}
                  handleRemoveFromWishlist={handleRemoveFromWishlist}
                />
                <Typography variant="subtitle2">
                  <hr />
                </Typography>
              </>
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
          <StyledSpan2 variant="h6" mt={4}>
            Your wishlist is empty
          </StyledSpan2>
        )}
      </Card>
    </Modal>
  );
};

export default WishlistModal;
