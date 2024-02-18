import { createSlice } from '@reduxjs/toolkit';
interface FilterState {
    selectedCategory: string;
}
const initialState = {
    selectedCategory: '',
} as FilterState;

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
