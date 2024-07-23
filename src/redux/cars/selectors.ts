import { RootState } from "../store";

export const selectCars = (state: RootState) => state.cars.cars;

export const selectBrands = (state: RootState) => state.cars.brands;

export const selectLoading = (state: RootState) => state.cars.loading;

export const selectError = (state: RootState) => state.cars.error;
