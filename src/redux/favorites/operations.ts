import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { carsApi } from "../../services/carsApi";

import { Car } from "../data.types";

export const addToFavorites = createAsyncThunk(
  "favorites/addToFavorites",
  async (car: Car, thunkApi) => {
    try {
      const response = await carsApi.post("/favorites", car);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue((error as AxiosError).response?.status);
    }
  }
);
