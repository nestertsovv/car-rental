import { RootState } from "../store";

export const selectCars = (state: RootState) => state.cars.cars;

export const selectPreflightCars = (state: RootState) =>
  state.cars.preflightCars;

export const selectPage = (state: RootState) => state.cars.page;

export const selectLoading = (state: RootState) => state.cars.loading;

export const selectError = (state: RootState) => state.cars.error;
