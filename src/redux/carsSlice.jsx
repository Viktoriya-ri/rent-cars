import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {requestAllCars} from './services/Api';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
    const response = await requestAllCars();
    console.log(response);
    return response;
});


const carsSlice = createSlice({
   name: 'cars',
   initialState: {
        cars: [],
        page: 1,
        isLoading: false,
        error: null,
   },
   reducers: {
    addPage(state){
        state.page = state.page + 1;
    },
   },
   extraReducers: (builder) => {
    builder
    .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars.push(...action.payload);
    })
    .addCase(fetchCars.fulfilled, (state,action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCar = action.payload;
    })
    .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
    });
   },
});

export const carsReducer = carsSlice.reducer;
