import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("ivrea");

const initialState = {
	username: "",
	password: "",
	isLogged: false,
	token: "",
};
export const getLoginToken = createAsyncThunk(
	"login/getLoginToken",
	async ({ username, password }, { rejectWithValue }) => {
		return await axios
			.post(`${process.env.REACT_APP_APIDEV_LOGIN}/login`, {
				username,
				password,
			})
			.then(({ config, headers, request, statusText, ...rest }) => rest)
			.catch((res) => rejectWithValue(res));
	}
);
export const getSessionTokenValidation = createAsyncThunk(
	"login/getSessionTokenValidation",
	async (values, { rejectWithValue }) => {
		return await axios
			.post(`${process.env.REACT_APP_APIDEV_LOGIN}/renew`, "", {
				headers: { token },
			})
			.then((res) => res)
			.catch((res) => rejectWithValue(res));
	}
);

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		loginUpdate: (state) => {
			return {
				...state,
				isLogged: true,
			};
		},
		logout: (state) => {
			localStorage.removeItem("ivrea");
			return {
				...state,
				isLogged: false,
			};
		},
		renewToken: (state, action) => {
			return {
				...state,
				token: action.payload,
			};
		},
	},
	extraReducers: {
		[getLoginToken.fulfilled]: (state, action) => {
			localStorage.setItem("ivrea", action.payload.data.token);
			return {
				...state,
				token: action.payload.data.token,
			};
		},
		[getSessionTokenValidation.fulfilled]: (state, action) => {
			localStorage.setItem("ivrea", action.payload.data.token);

			return {
				...state,
				token: action.payload.data.token,
				isLogged: true,
			};
		},
	},
});

export const { loginUpdate, logout, renewToken } = loginSlice.actions;

export default loginSlice.reducer;
