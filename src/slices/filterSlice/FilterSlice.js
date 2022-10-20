import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoria: "",
	estado: "",
	stock: "",
	input: "",
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterOptions: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
		initialFilters: () => {
			return initialState;
		},
	},
});

export const { filterOptions, initialFilters } = filterSlice.actions;

export default filterSlice.reducer;
