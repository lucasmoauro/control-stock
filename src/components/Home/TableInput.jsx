import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toastAlert } from "../../helpers/SwalToast";
import { logout } from "../../slices/loginSlice/LoginSlice";
import { updateMangaQTY } from "../../slices/mangaSlice/MangaSlice";

export const TableInput = ({ cantidad, id, token, index }) => {
	const input = document.getElementById(index);
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(cantidad);

	const handleQtyChange = (e) => {
		e.preventDefault();
		input.blur();
		dispatch(updateMangaQTY({ quantity, id, token })).then(({ payload }) => {
			if (payload.status !== 200) {
				toastAlert("Hubo un error.", "error");
				dispatch(logout());
			}
		});
	};
	const handleSelectText = () => {
		input.focus();
		input.select();
	};
	return (
		<form onSubmit={handleQtyChange}>
			<TextField
				id={index.toString()}
				inputProps={{ min: 0 }}
				size="small"
				hiddenLabel
				variant="outlined"
				type="number"
				autoComplete="off"
				value={quantity}
				onClick={handleSelectText}
				onChange={(e) => setQuantity(e.target.value)}
				onBlur={(e) => handleQtyChange(e)}
				sx={{
					width: "5rem",
				}}
			/>
			<button
				type="submit"
				style={{
					display: "none",
				}}
			></button>
		</form>
	);
};
