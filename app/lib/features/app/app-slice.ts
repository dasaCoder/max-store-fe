import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Notification {
    message: string;
    type: 'error' | 'success' | 'info' | 'warning';
    timeout: number;
}
export interface App {
    isLoading: boolean;
    notification: Notification | null;
}

const initialState: App = {
    isLoading: false,
    notification: null
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
        }
    }
});

export const { setLoading, setNotification, removeNotification } = appSlice.actions;
export default appSlice.reducer;