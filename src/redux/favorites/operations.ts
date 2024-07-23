import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { carsApi } from "../../services/carsApi";

import { Car } from "../data.types";

export const getAllFavorites = createAsyncThunk(
  "favorites/getAllFavorites",
  async (_, thunkApi) => {
    try {
      const response = await carsApi.get("/favorites");
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue((error as AxiosError).response?.status);
    }
  }
);

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

export const deleteFromFavorites = createAsyncThunk(
  "favorites/deleteFromFavorites",
  async (id: string, thunkApi) => {
    try {
      console.log(id);

      const response = await carsApi.delete(`/favorites/${id}`);

      console.log(response.data);

      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue((error as AxiosError).response?.status);
    }
  }
);
