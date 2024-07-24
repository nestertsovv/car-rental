import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { carsApi } from "../../services/carsApi";
import toast from "react-hot-toast";

// export const getAllCars = createAsyncThunk(
//   "cars/getAllCars",
//   async (_, thunkApi) => {
//     try {
//       const response = await carsApi.get("/catalog");
//       return response.data;
//     } catch (error) {
//       toast.error("Couldn't fetch the cars, please try again");
//       return thunkApi.rejectWithValue((error as AxiosError).response?.status);
//     }
//   }
// );

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

      const responseAll = await carsApi.get("/catalog");
      const response = await carsApi.get("/catalog", params);

      response.data.results = response.data;
      response.data.total = responseAll.data.length;
      response.data.totalPages = Math.ceil(
        responseAll.data.length / params.params.limit
      );

      return response.data;
    } catch (error) {
      toast.error("Couldn't fetch the cars, please try again");
      return thunkApi.rejectWithValue((error as AxiosError).response?.status);
    }
  }
);
