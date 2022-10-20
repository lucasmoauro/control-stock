import { MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toastAlert } from "../../helpers/SwalToast";
import { logout } from "../../slices/loginSlice/LoginSlice";
import { updateMangaState } from "../../slices/mangaSlice/MangaSlice";

const selectOptions = ["En curso", "Finalizado"];

export const TableSelect = ({ estado, id, token }) => {
	const dispatch = useDispatch();

	const [mangaState, setMangaState] = useState(estado);

	const handleSelect = (e) => {
		setMangaState(e.target.value);

		dispatch(updateMangaState({ state: e.target.value, id, token })).then(
			({ payload }) => {
				if (payload.status !== 200) {
					toastAlert("Hubo un error", "error");
                    dispatch(logout());
				}
			}
		);
	};

	useEffect(() => {
		setMangaState(estado);
	}, [estado]);

	return (
		<Select
			size="small"
			variant="filled"
			hiddenLabel
			fullWidth
			value={mangaState || ""}
			onChange={handleSelect}
		>
			{selectOptions.map((option, index) => {
				return (
					<MenuItem key={index} value={option}>
						{option}
					</MenuItem>
				);
			})}
		</Select>
	);
};
