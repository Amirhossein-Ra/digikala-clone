import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./Category/CategorySlice";
import StoryReducer from "./Stories/StorySlice";
import SliderReducer from "./Slider/SliderSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: CategoryReducer,
      stories: StoryReducer,
      slider: SliderReducer,
    },
  });
};
