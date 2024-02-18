import { createSlice } from '@reduxjs/toolkit';
interface searchStringState {
    searchString: string;
}
const initialState = {
    searchString: '',
} as searchStringState;

export const searchStringSlice = createSlice({
    name: 'searchString',
    initialState,
    reducers: {
        setSearchString: (state, action) => {
            state.searchString = action.payload;
        },
    },
});

export const { setSearchString } = searchStringSlice.actions;
