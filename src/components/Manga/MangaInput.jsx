import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { newManga } from "../../slices/mangaSlice/MangaSlice";

export const MangaInput = ({
	label,
	inputName,
	inputType = "text",
	required = false,
}) => {
	const dispatch = useDispatch();
	const { newMangaData } = useSelector((state) => state.mangaReducer);

	const handleInput = (e) => {
		dispatch(newManga({ ...newMangaData, [inputName]: e.target.value }));
	};

	return (
		<Box
			sx={{
				margin: "1rem 0",
				width: "80%",
			}}
		>
			<TextField
				variant="filled"
				size="small"
				required={required}
				label={label}
				fullWidth
				min={inputType === "number" ? 0 : null}
				type={inputType}
				value={newMangaData[inputName] || ""}
				onChange={handleInput}
			/>
		</Box>
	);
};
