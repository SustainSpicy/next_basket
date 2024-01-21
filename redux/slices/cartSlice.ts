import { CartState, ProductItemProps } from "@/constants/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const loadCartFromLocalStorage = (): ProductItemProps[] => {
  try {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    return [];
  }
};

const saveCartToLocalStorage = (cart: ProductItemProps[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const calculateTotalPrice = (items: ProductItemProps[]): number => {
  return items.reduce((total, item) => total + (item.total || 0), 0);
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductItemProps>) => {
      const { id, price } = action.payload;

      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      console.log(existingItemIndex);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase the quantity
        state.items[existingItemIndex] = {
          ...state.items[existingItemIndex],
          quantity: (state.items[existingItemIndex].quantity || 0) + 1,
          total: ((state.items[existingItemIndex].quantity || 0) + 1) * price,
        };
      } else {
        // If the item is not in the cart, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1, total: price });
      }
      console.log(state.items);

      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
      saveCartToLocalStorage(state.items);
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ itemId: number; newQuantity: number }>
    ) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdateIndex = state.items.findIndex(
        (item) => item.id === itemId
      );

      if (itemToUpdateIndex !== -1) {
        // Create a copy of the item before modifying
        const updatedItem = {
          ...state.items[itemToUpdateIndex],
          quantity: Math.max(1, newQuantity),
          total:
            Math.max(1, newQuantity) * state.items[itemToUpdateIndex].price,
        };

        // Update the item in the array
        state.items[itemToUpdateIndex] = updatedItem;
      }

      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } =
  cartSlice.actions;

export const selectCartTotalPrice = (state: RootState) =>
  calculateTotalPrice(state.cart.items);

export default cartSlice.reducer;
