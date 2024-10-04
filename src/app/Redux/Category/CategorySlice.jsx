import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchCategory = createAsyncThunk("/Categories/fetch", async () => {
  const res = await axios.get("http://localhost:4000/category");
  return res.data;
});

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState: {
    Category: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.Category = action.payload;
    });
  },
});

export default CategorySlice.reducer;
