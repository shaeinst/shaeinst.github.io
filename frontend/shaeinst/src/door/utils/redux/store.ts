import { configureStore } from "@reduxjs/toolkit";
import dimensionReducer from "./dimensionSlice";

export const store = configureStore({
    reducer: {
        dimension: dimensionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
