import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    username: string;
    email: string;
    imgURL: string;
    token: string;
}

export interface UserState {
    user: User | null;
    isLoading: boolean;
    isFetching: boolean;
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    isFetching: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

