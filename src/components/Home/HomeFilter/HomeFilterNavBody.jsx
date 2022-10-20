import {
	Box,
	Button,
	Divider,
	FormControl,
	FormControlLabel,
	ListItem,
	Radio,
	RadioGroup,
	Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	filterOptions,
	initialFilters,
} from "../../../slices/filterSlice/FilterSlice";

export const HomeFilterNavBody = ({ setIsDrawerOpen }) => {
	const filters = useSelector((state) => state.filterReducer);
	const dispatch = useDispatch();

	//Resetea los filtros
	const handleInitialFilters = () => {
		dispatch(initialFilters());
		setIsDrawerOpen(false);
	};

	//Mantiene en memoria los filtros seleccionados por el usuario
	useEffect(() => {
		const filter = JSON.parse(sessionStorage.getItem("filters"));
		dispatch(filterOptions({ ...filters, ...filter }));
	}, []); //eslint-disable-line

	return (
		<>
			<Box
				sx={{
					marginTop: "1.5rem",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Typography variant="h6" component="p">
					Filtro
				</Typography>
			</Box>
			<Divider />

			<Box>
				<Typography
					variant="h6"
					component="p"
					sx={{
						paddingLeft: "1rem",
						paddingTop: ".5rem",
					}}
				>
					Estado
				</Typography>
				{/* Estado */}
				<ListItem
					sx={{
						paddingLeft: "2rem",
						paddingTop: "0rem ",
					}}
				>
					<FormControl>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							value={filters.estado}
							name="radio-buttons-group"
							onChange={(e) =>
								dispatch(filterOptions({ ...filters, estado: e.target.value }))
							}
						>
							<FormControlLabel
								value="en curso"
								control={<Radio />}
								label="En curso"
							/>
							<FormControlLabel
								value="finalizado"
								control={<Radio />}
								label="Finalizado"
							/>
							<FormControlLabel value="" control={<Radio />} label="Todo" />
						</RadioGroup>
					</FormControl>
				</ListItem>
				{/* Categoria */}
				<Divider />
				<Typography
					variant="h6"
					component="p"
					sx={{
						paddingLeft: "1rem",
						paddingTop: ".5rem",
					}}
				>
					Categoria
				</Typography>
				<ListItem
					sx={{
						paddingLeft: "2rem",
					}}
				>
					<FormControl>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							value={filters.categoria}
							name="radio-buttons-group"
							onChange={(e) =>
								dispatch(
									filterOptions({ ...filters, categoria: e.target.value })
								)
							}
						>
							<FormControlLabel
								value="comic"
								control={<Radio />}
								label="Comic"
							/>
							<FormControlLabel
								value="manga"
								control={<Radio />}
								label="Manga"
							/>
							<FormControlLabel value="" control={<Radio />} label="Todo" />
						</RadioGroup>
					</FormControl>
				</ListItem>
				{/* Stock */}
				<Divider />
				<Typography
					variant="h6"
					component="p"
					sx={{
						paddingLeft: "1rem",
						paddingTop: ".5rem",
					}}
				>
					Stock
				</Typography>
				<ListItem
					sx={{
						paddingLeft: "2rem",
					}}
				>
					<FormControl>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							value={filters.stock}
							name="radio-buttons-group"
							onChange={(e) =>
								dispatch(filterOptions({ ...filters, stock: e.target.value }))
							}
						>
							<FormControlLabel
								value={1}
								control={<Radio />}
								label="Con stock"
							/>
							<FormControlLabel
								value={0}
								control={<Radio />}
								label="Sin stock"
							/>
							<FormControlLabel value="" control={<Radio />} label="Todo" />
						</RadioGroup>
					</FormControl>
				</ListItem>

				{/* Reestablecer filtros */}
				<Divider />

				<ListItem>
					<Button fullWidth variant="contained" onClick={handleInitialFilters}>
						Reestablecer
					</Button>
				</ListItem>
			</Box>
		</>
	);
};
