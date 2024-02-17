import {configureStore} from '@reduxjs/toolkit';
import { combineReducer } from 'redux';
import { carsReducer } from '../redux/carsSlice';


export const rootReducer = combineReducer({
    cars: carsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export default store;