import { createSlice } from "@reduxjs/toolkit";

import { FilterState } from "../data.types";

const initialState: FilterState = {
  filteredCars: [],
  isEmptyInfo: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilteredCars: (state, action) => {
      state.filteredCars = action.payload;
    },
    setIsEmptyInfo: (state, action) => {
      state.isEmptyInfo = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilteredCars, setIsEmptyInfo } = filtersSlice.actions;
