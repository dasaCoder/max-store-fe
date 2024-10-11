'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { set } from "firebase/database";

export interface Notification {
    message: string;
    type: 'error' | 'success' | 'info' | 'warning';
    timeout: number;
}
export interface App {
    isLoading: boolean;
    notification: Notification | null;
    isCartOpen: boolean;
    currencyCode: string;
}

const initialState: App = {
    isLoading: false,
    notification: null,
    isCartOpen: false,
    currencyCode: 'LKR'
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setNotification: (state, action: PayloadAction<Notification>) => {
            state.notification = action.payload;
        },
        removeNotification: (state) => {
            state.notification = null;
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const { setLoading, setNotification, removeNotification, toggleCart } = appSlice.actions;
export default appSlice.reducer;