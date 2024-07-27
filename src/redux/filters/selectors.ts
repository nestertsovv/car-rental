import { RootState } from "../store";

export const selectFilteredCars = (state: RootState) =>
  state.filters.filteredCars;

export const selectIsEmptyInfo = (state: RootState) =>
  state.filters.isEmptyInfo;
