import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOptions } from "../slices/filterSlice/FilterSlice";
export const UserInputText = ({ setPage, rowsPerPageCount }) => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const isSmall = useMediaQuery(theme.breakpoints.up(900));
	const { input, ...state } = useSelector((state) => state.filterReducer);

	const handleUserInput = (e) => {
		sessionStorage.setItem("rows", rowsPerPageCount);
		if (e.target.value !== "") {
			setPage(0);
		} else {
			setPage(sessionStorage.getItem("page"));
		}
		sessionStorage.setItem("userInput", e.target.value);
		dispatch(filterOptions({ ...state, input: e.target.value }));
	};

	useEffect(() => {
		if (sessionStorage.getItem("userInput") !== null) {
			dispatch(
				filterOptions({ ...state, input: sessionStorage.getItem("userInput") })
			);
			setPage(0);
		}
	}, []); //eslint-disable-line

	if (isSmall) {
		return (
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TextField
					label="Buscar manga..."
					variant="filled"
					value={input}
					onChange={handleUserInput}
					sx={{
						width: "40%",
					}}
				/>
			</Box>
		);
	} else {
		return (
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TextField
					label="Buscar manga..."
					variant="filled"
					value={input}
					onChange={handleUserInput}
					sx={{
						width: "100%",
					}}
				/>
			</Box>
		);
	}
};
