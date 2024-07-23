import { createSlice } from "@reduxjs/toolkit";

import carsData from "../../data/cars.json";
import brandsData from "../../data/brands.json";
import { getCars } from "./operations";

const initialState = {
  cars: carsData || [],
  brands: brandsData || [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const carsReducer = carsSlice.reducer;
