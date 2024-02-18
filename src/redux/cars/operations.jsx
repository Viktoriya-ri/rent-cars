import {createAsyncThunk} from '@reduxjs/toolkit';
import {requestAllCars} from '../services/Api';


export const getAllCarsThunk = createAsyncThunk(
    "cars/requestAllCars",
    async (params, thunkApi) => {
        try {
            const response = await requestAllCars(params);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error. message);
        }
    }
);