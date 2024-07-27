import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { carsApi } from "../../services/carsApi";

export const getAllCars = createAsyncThunk(
  "cars/getAllCars",
  async (_, thunkApi) => {
    try {
      const response = await carsApi.get("/catalog");

      response.data.results = response.data;
      response.data.total = response.data.length;
      response.data.totalPages = Math.ceil(response.data.length / 12);

      return response.data;
    } catch (error) {
      toast.error("Couldn't fetch the cars, please try again");
      return thunkApi.rejectWithValue((error as AxiosError).response?.status);
    }
  }
);

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
      toast.error("Couldn't fetch the cars, please try again");
      return thunkApi.rejectWithValue((error as AxiosError).response?.status);
    }
  }
);
