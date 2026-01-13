import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// These types are for TypeScript to help us later
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;