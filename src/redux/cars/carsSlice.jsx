import {createSlice} from '@reduxjs/toolkit';
import {getAllCarsThunk} from '../cars/operations';

const InitialState = {
    items: [],
    page: 1,
    brand: null,
    isLoading: false,
    error: null,
};

const carsSlice = createSlice({
    name: 'cars',
    initialState: InitialState,
    reducers: {
     addPage(state){
         state.page = state.page + 1;
     },
     resetCars(state) {
         state.page = 1;
         state.items = [];
     },
    },
    extraReducers: (builder) => 
     builder
     .addCase(getAllCarsThunk.pending, (state) => {
         state.isLoading = false;
         state.error = null;
         
     })
     .addCase(getAllCarsThunk.fulfilled, (state,action) => {
         state.isLoading = false;
         state.error = null;
         if(state.page === 1){
             state.items = action.payload;
         }else {
             state.items.push(...action.payload);
         }
     })
     .addCase(getAllCarsThunk.rejected, (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
     }),
    });  

export const {addPage, resetCars} = carsSlice.action;
export const carsReducer = carsSlice.reducer;
