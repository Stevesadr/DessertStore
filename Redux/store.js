import { configureStore } from "@reduxjs/toolkit";
import shoping from "./feature/ShopingCardSlice/shopingcard";

export const Store = configureStore({
  reducer: { shopingCardReducer: shoping },
});
