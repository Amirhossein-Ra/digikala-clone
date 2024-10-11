const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

export const fetchSlider = createAsyncThunk("/Slider/fetch", async () => {
  const res = await axios.get("http://localhost:4000/Slider");
  return res.data;
});

const SliderSlice = createSlice({
  name: "Slider",
  initialState: {
    Slider: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSlider.fulfilled, (state, action) => {
      state.Slider = action.payload;
    });
  },
});

export default SliderSlice.reducer;
