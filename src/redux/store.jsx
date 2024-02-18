import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './favorites/favoriteSlice';
import {carsReducer} from './cars/carsSlice';


const authConfig = {
    key: "favorites",
    storage,
    whilelist: ["items"],
};

const rootReducer = combineReducers({
    favorites: persistReducer(authConfig, favoritesReducer),
    cars: carsReducer,
});

const ignoredPersistenceActions = [
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ignoredPersistenceActions,
        },
    }),
});

export const persistor = persistStore(store);

export default persistor;