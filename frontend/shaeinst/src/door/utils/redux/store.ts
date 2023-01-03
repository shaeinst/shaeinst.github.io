import { configureStore } from "@reduxjs/toolkit";
import dimensionReducer from "./dimensionSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
    reducer: {
        dimension: dimensionReducer,
        theme: themeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
