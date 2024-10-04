import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./Category/CategorySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: CategoryReducer,
    },
  });
};
