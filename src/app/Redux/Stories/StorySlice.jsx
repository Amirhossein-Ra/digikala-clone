import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchStories = createAsyncThunk("/Stories/fetch", async () => {
  const res = await axios.get("http://localhost:4000/Stories");
  return res.data;
});

const StorySlice = createSlice({
  name: "Stories",
  initialState: {
    Stories: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.Stories = action.payload;
    });
  },
});

export default StorySlice.reducer;
