import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

import { getCars } from "./operations";
import { CarsState } from "../data.types";

const initialState: CarsState = {
  cars: [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addMatcher(isFulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
      })
      .addMatcher(isPending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const carsReducer = carsSlice.reducer;
