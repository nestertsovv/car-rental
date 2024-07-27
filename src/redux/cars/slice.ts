import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

import { getAllCars, getCars } from "./operations";
import { CarsState } from "../data.types";

const initialState: CarsState = {
  cars: [],
  preflightCars: {
    results: [],
    total: 0,
    totalPages: 0,
  },
  page: 1,
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCars: (state, action) => {
      state.cars = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = [...state.cars, ...action.payload];
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.preflightCars.results = [
          ...state.preflightCars.results,
          ...action.payload.results,
        ];
        state.preflightCars.total = action.payload.total;
        state.preflightCars.totalPages = action.payload.totalPages;
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
export const { setPage, setCars } = carsSlice.actions;
