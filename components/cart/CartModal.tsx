import React from "react";
import {
  removeFromCart,
  selectCartTotalPrice,
  updateCartItemQuantity,
} from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { Modal, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCartPrice = useSelector(selectCartTotalPrice);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    dispatch(updateCartItemQuantity({ itemId: id, newQuantity }));
  };
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{ display: "flex", justifyContent: "flex-end" }}
    >
      <Card sx={{ minWidth: "300px", padding: 2 }}>
        <Typography variant="h2">Shopping Cart</Typography>
        <Typography variant="subtitle2" component="div">
          <hr />
        </Typography>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <div key={index}>
                <CartItem
                  {...item}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateQuantity={handleUpdateQuantity}
                />
                <Typography variant="subtitle2" component="div">
                  <hr />
                </Typography>
              </div>
            ))}
            <Stack spacing={2}>
              <Typography variant="subtitle2" component="div">
                <hr />
              </Typography>
              <Typography
                variant="body1"
                component="div"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Total: ${totalCartPrice}
              </Typography>
            </Stack>
          </>
        ) : (
          <Typography variant="h6" mt={4}>
            Your cart is empty
          </Typography>
        )}
      </Card>
    </Modal>
  );
};

export default CartModal;
