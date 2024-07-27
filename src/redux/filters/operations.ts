import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { carsApi } from "../../services/carsApi";
import { FilterParams } from "../data.types";

export const getFilteredCars = createAsyncThunk(
  "filters/getFilteredCars",
  async (params: FilterParams, thunkApi) => {
    try {
      const response = await carsApi.get("/catalog", { params });
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue((error as AxiosError).response?.status);
    }
  }
);
