import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface dimensionInterface {
    screenWidth: number;
    screenHeight: number;
}

const initialState: dimensionInterface = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
};

export const dimensionSlice = createSlice({
    name: "dimension",
    initialState,
    reducers: {
        updateDimension: (state, action: PayloadAction<dimensionInterface>) => {
            state.screenWidth = action.payload.screenWidth;
            state.screenHeight += action.payload.screenHeight;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateDimension } = dimensionSlice.actions;

export default dimensionSlice.reducer;
