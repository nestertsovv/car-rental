import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { carsApi } from "../../services/carsApi";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (page: number = 1, thunkApi) => {
    try {
      const params = {
        params: {
          limit: 12,
          page,
        },
      };

      const response = await carsApi.get("/catalog", params);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue((error as AxiosError).response?.status);
    }
  }
);
