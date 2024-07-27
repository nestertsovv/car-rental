import { createSlice } from "@reduxjs/toolkit";

import { Car, FavoritesState } from "../data.types";
// import { addToFavorites, getAllFavorites } from "./operations";

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder;
    // .addCase(addToFavorites.fulfilled, (state, action) => {
    //   state.favorites = [...state.favorites, action.payload];
    // })
    // .addCase(getAllFavorites.fulfilled, (state, action) => {
    //   state.favorites = action.payload;
    // });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
