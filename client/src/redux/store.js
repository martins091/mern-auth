import {configureStore} from '@reduxjs/toolkit';
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { userReducer } from './user/userSlice';

export const store = configureStore({
    reducer: {user: userReducer},
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});