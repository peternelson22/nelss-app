'use client';

import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
  name: 'country',
  initialState: {
    country: 'France',
  },
  reducers: {
    getCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { getCountry } = countrySlice.actions;

export const selectCountry = (state) => state.country.country;

export default countrySlice.reducer;
