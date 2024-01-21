import { ProductItemProps, WishListState } from "@/constants/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
const loadWishlistFromLocalStorage = (): ProductItemProps[] => {
  try {
    const wishlistData = localStorage.getItem("wishlist");
    return wishlistData ? JSON.parse(wishlistData) : [];
  } catch (error) {
    return [];
  }
};

const saveWishlistToLocalStorage = (wishlist: ProductItemProps[]): void => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
const calculateTotalPrice = (items: ProductItemProps[]): number => {
  return items.reduce((total, item) => total + (item.price || 0), 0);
};

const initialState: WishListState = {
  items: loadWishlistFromLocalStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductItemProps>) => {
      const { id } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex === -1) {
        state.items.push(action.payload);
        saveWishlistToLocalStorage(state.items);
      }
    },
    removeFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
      saveWishlistToLocalStorage(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlistTotalPrice = (state: RootState) =>
  calculateTotalPrice(state.wishlist.items);

export default wishlistSlice.reducer;
