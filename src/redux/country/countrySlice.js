import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://restcountries.com/v3.1/all';

export const fetchCountryData = createAsyncThunk('country/fetchData', async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data.map((item) => ({
    name: item.name.common,
    capital: item.capital,
    continent: item.continents[0],
    flag: item.flags.png,
    population: item.population,
    map: item.maps.googleMaps,
    area: item.area,
  }));
});
const initialState = {
  country: [],
  isLoading: false,
  error: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCountryData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        country: action.payload,
      }))
      .addCase(fetchCountryData.rejected, (state) => ({
        isLoading: false,
        ...state,
      }));
  },
});

export default countrySlice.reducer;
