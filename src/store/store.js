import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice/LoginSlice";
import mangaReducer from "../slices/mangaSlice/MangaSlice";
import filterReducer from "../slices/filterSlice/FilterSlice";

export const store = configureStore({
	reducer: {
		loginReducer,
		mangaReducer,
		filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
