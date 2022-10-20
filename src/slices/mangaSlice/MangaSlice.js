import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	mangas: [],
	newMangaData: {
		titulo: "",
		nivel: "",
		deposito: "",
		pasillo: "",
		seccion: "",
		cantidad: "",
		categoria: "",
		id: "",
	},
};

//Trae todos los mangas
export const getMangasList = createAsyncThunk("Mangas/GetMangas", async () => {
	return await axios
		.get(process.env.REACT_APP_APIDEV_MANGAS)
		.then((res) => res.data);
});
//Trae un manga de la DB
export const getManga = createAsyncThunk(
	"Mangas/GetManga",
	async (id, { rejectWithValue }) => {
		return await axios
			.get(`${process.env.REACT_APP_APIDEV_MANGAS}/${id}`)
			.then((res) => res.data)
			.catch((res) => rejectWithValue(res));
	}
);

//Crea un manga en la DB
export const postManga = createAsyncThunk(
	"Mangas/PostManga",
	async ({ newMangaData, token }, { rejectWithValue }) => {
		const { id, ...manga } = newMangaData;
		return await axios
			.post(process.env.REACT_APP_APIDEV_MANGAS, manga, {
				headers: { token },
			})
			.then((res) => res)
			.catch((res) => rejectWithValue(res));
	}
);

//Actualiza un manga en la DB
export const putManga = createAsyncThunk(
	"Mangas/PutManga",
	async ({ newMangaData, token }, { rejectWithValue }) => {
		const { id, ...manga } = newMangaData;
		return await axios
			.put(`${process.env.REACT_APP_APIDEV_MANGAS}/${id}`, manga, {
				headers: { token },
			})
			.then((res) => res)
			.catch((res) => rejectWithValue(res));
	}
);

//Actualiza el stock de un manga
export const updateMangaStock = createAsyncThunk(
	"Mangas/PatchMangaStock",
	async ({ stock, id, token }, { rejectWithValue }) => {
		return await axios
			.patch(
				`${process.env.REACT_APP_APIDEV_MANGAS}/${id}`,
				{
					stock,
				},
				{
					headers: {
						token,
					},
				}
			)
			.then((res) => res)
			.catch((res) => rejectWithValue(res));
	}
);
//Actualiza la cantidad de un manga
export const updateMangaQTY = createAsyncThunk(
	"Mangas/PatchMangaQTY",
	async ({ quantity, id, token }, { rejectWithValue }) => {
		return await axios
			.patch(
				`${process.env.REACT_APP_APIDEV_MANGAS}/qty/${id}`,
				{
					cantidad: quantity,
				},
				{
					headers: {
						token,
					},
				}
			)
			.then((res) => res)
			.catch((res) => rejectWithValue(res));
	}
);
//Actualiza el estado de un manga
export const updateMangaState = createAsyncThunk(
	"Mangas/PatchMangaState",
	async ({ state, id, token }, { rejectWithValue }) => {
		return await axios
			.patch(
				`${process.env.REACT_APP_APIDEV_MANGAS}/state/${id}`,
				{
					estado: state,
				},
				{
					headers: {
						token,
					},
				}
			)
			.then((res) => res)
			.catch((res) => rejectWithValue(res));
	}
);
//Elimina un manga
export const deleteManga = createAsyncThunk(
	"Mangas/DeleteManga",
	async ({ id, token }, { rejectWithValue }) => {
		console.log(id);
		return await axios
			.delete(`${process.env.REACT_APP_APIDEV_MANGAS}/${id}`, {
				headers: { token },
			})
			.then((res) => res)
			.catch((res) => rejectWithValue(res));
	}
);

export const mangaSlice = createSlice({
	name: "manga",
	initialState,
	reducers: {
		newManga: (state, action) => {
			return {
				...state,
				newMangaData: {
					...action.payload,
				},
			};
		},
		editManga: (state, action) => {
			return {
				...state,
				newMangaData: {
					...state.newMangaData,
					id: action.payload,
				},
			};
		},
		deleteMangaUI: (state, action) => {
			const filteredMangas = state.mangas.filter(
				(el) => el.titulo !== action.payload
			);

			return {
				...state,
				mangas: [...filteredMangas],
			};
		},
		stockManga: (state, action) => {
			const newState = [...state.mangas];

			const newMangaStock = newState.find((el) => el.id === action.payload);

			newMangaStock.stock = !newMangaStock.stock;
		},
		stateManga: (state, action) => {
			const newState = [...state.mangas];

			const newMangaState = newState.find((el) => el.id === action.payload.id);
			newMangaState.state = action.payload.state;
		},
		initialMangaState: (state, action) => {
			return {
				...state,
				newMangaData: {
					titulo: "",
					nivel: "",
					deposito: "",
					pasillo: "",
					seccion: "",
					id: "",
				},
			};
		},
	},
	extraReducers: {
		[getMangasList.fulfilled]: (state, action) => {
			return {
				...state,
				mangas: [...action.payload.mangas],
			};
		},
		[getManga.fulfilled]: (state, action) => {
			return {
				...state,
				newMangaData: {
					...action.payload.manga,
				},
			};
		},
	},
});

export const {
	newManga,
	editManga,
	stockManga,
	deleteMangaUI,
	initialMangaState,
	stateManga,
} = mangaSlice.actions;

export default mangaSlice.reducer;
