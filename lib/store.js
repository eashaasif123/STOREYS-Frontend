// 'use client'
import { configureStore } from '@reduxjs/toolkit';
import { registerSlice } from './features/authenticationSlice';

// Create and configure the store instance
const store = configureStore({
    reducer: {
        [registerSlice.name]: registerSlice.reducer
    }
});

// Export the store instance directly
export default store;
