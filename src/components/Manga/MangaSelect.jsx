import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { newManga } from "../../slices/mangaSlice/MangaSlice";

const deposito = ["1", "2", "3"];
const categoria = ["manga", "comic"];
const estado = ["En curso", "Finalizado"];
export const MangaSelect = ({ selectName, label }) => {
	const dispatch = useDispatch();
	const { newMangaData } = useSelector((state) => state.mangaReducer);

	const handleSelect = (e) => {
		dispatch(newManga({ ...newMangaData, [selectName]: e.target.value }));
	};

	if (selectName === "deposito") {
		return (
			<FormControl
				sx={{
					margin: "1rem 0",
					width: "80%",
				}}
			>
				<InputLabel id="select">{label}</InputLabel>
				<Select
					size="small"
					variant="filled"
					labelId="select"
					label={label}
					fullWidth
					value={newMangaData[selectName] || ""}
					onChange={handleSelect}
				>
					{deposito.map((depot, index) => (
						<MenuItem value={depot} key={index}>
							{depot}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		);
	} else if (selectName === "categoria") {
		return (
			<FormControl
				sx={{
					margin: "1rem 0",
					width: "80%",
				}}
			>
				<InputLabel id="select">{label}</InputLabel>
				<Select
					size="small"
					variant="filled"
					labelId="select"
					label={label}
					fullWidth
					type="text"
					value={newMangaData[selectName] || ""}
					onChange={handleSelect}
				>
					{categoria.map((category, index) => (
						<MenuItem value={category} key={index}>
							{category}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		);
	} else {
		return (
			<FormControl
				sx={{
					margin: "1rem 0",
					width: "80%",
				}}
			>
				<InputLabel id="select">{label}</InputLabel>
				<Select
					size="small"
					variant="filled"
					labelId="select"
					label={label}
					fullWidth
					type="text"
					value={newMangaData[selectName] || ""}
					onChange={handleSelect}
				>
					{estado.map((state, index) => (
						<MenuItem value={state} key={index}>
							{state}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		);
	}
};
