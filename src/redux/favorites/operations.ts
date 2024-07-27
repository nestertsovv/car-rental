// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AxiosError } from "axios";
// import { carsApi } from "../../services/carsApi";

// import { Car } from "../data.types";
// import toast from "react-hot-toast";

// export const getAllFavorites = createAsyncThunk(
//   "favorites/getAllFavorites",
//   async (_, thunkApi) => {
//     try {
//       const response = await carsApi.get("/favorites");
//       return response.data;
//     } catch (error) {
//       toast.error("Couldn't fetch the favorites, please try again");
//       thunkApi.rejectWithValue((error as AxiosError).response?.status);
//     }
//   }
// );

// export const addToFavorites = createAsyncThunk(
//   "favorites/addToFavorites",
//   async (car: Car, thunkApi) => {
//     try {
//       const response = await carsApi.post("/favorites", car);
//       return response.data;
//     } catch (error) {
//       toast.error("Couldn't to add to favorites, please try again");
//       thunkApi.rejectWithValue((error as AxiosError).response?.status);
//     }
//   }
// );

// export const deleteFromFavorites = createAsyncThunk(
//   "favorites/deleteFromFavorites",
//   async (id: string, thunkApi) => {
//     try {
//       const response = await carsApi.delete(`/favorites/${id}`);
//       return response.data;
//     } catch (error) {
//       toast.error("Couldn't delete from favorites, please try again");
//       thunkApi.rejectWithValue((error as AxiosError).response?.status);
//     }
//   }
// );
