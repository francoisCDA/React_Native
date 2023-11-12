import { configureStore } from '@reduxjs/toolkit';
import snakeSlice from "./redux/SnakeSlice";

export const store = configureStore({
    reducer: {
        snake: snakeSlice,
    }
})