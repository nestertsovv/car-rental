import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { carsApi } from "../../services/carsApi";
import toast from "react-hot-toast";

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
