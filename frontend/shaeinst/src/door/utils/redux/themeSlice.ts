import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface themeInterface {
    themeMode: string;
}

const initialState: themeInterface = {
    themeMode: "day",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        updateThemeMode: (state, action: PayloadAction<themeInterface>) => {
            state.themeMode = action.payload.themeMode;
        },
    },
});

export const { updateThemeMode: updateThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
