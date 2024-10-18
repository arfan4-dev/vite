import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalSlice'; // Import the modal slice reducer

export const store = configureStore({
    reducer: {
        modal: modalReducer, // Add modal slice to the store
    },
});

;
