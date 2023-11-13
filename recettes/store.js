import { configureStore } from '@reduxjs/toolkit';
import bookmarkSlice from './slice/bookmarkSlice';

export const store = configureStore({
    reducer: {
        bookmark: bookmarkSlice,
    }
})