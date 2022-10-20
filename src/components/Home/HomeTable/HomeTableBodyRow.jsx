import {
	Button,
	Checkbox,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteManga,
	deleteMangaUI,
	editManga,
	stockManga,
	updateMangaStock,
} from "../../../slices/mangaSlice/MangaSlice";
import { useNavigate } from "react-router-dom";
import { toastAlert } from "../../../helpers/SwalToast";
import { logout } from "../../../slices/loginSlice/LoginSlice";
import { TableInput } from "../TableInput";
import { TableSelect } from "../TableSelect";

export const HomeTableBodyRow = ({ page, rowsPerPageCount }) => {
	const { mangas } = useSelector((state) => state.mangaReducer);
	const { estado, categoria, stock, input } = useSelector(
		(state) => state.filterReducer
	);
	const { isLogged, token } = useSelector((state) => state.loginReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const filteredMangas = mangas
		.filter((el) => el.titulo.toLowerCase().includes(input.toLowerCase()))
		.filter(
			(el) =>
				(stock === "1" && el.stock === true) ||
				(stock === "0" && el.stock === false) ||
				stock === ""
		)
		.filter(
			(el) => el.categoria.toLowerCase() === categoria || categoria === ""
		)
		.filter((el) => el.estado.toLowerCase() === estado || estado === "");

	const handleMangaDelete = (id, titulo) => {
		//Elimina el manga en la UI
		dispatch(deleteMangaUI(titulo));

		//Elimina el manga en la DB
		dispatch(deleteManga({ id, token })).then((res) => {
			if (res.payload.status === 200) {
				toastAlert("Manga borrado.", "success");
			} else {
				dispatch(logout());
				toastAlert("No se pudo borrar el manga.", "error");
			}
		});
	};

	const handleChecked = (e, id, stock) => {
		//Envia la peticion al back para actualizar en DB el stock del manga
		dispatch(updateMangaStock({ stock: !stock, id, token })).then(
			({ payload }) => {
				if (payload.status === 200) {
					//Actualiza visualmente en la UI el stock del manga
					dispatch(stockManga(id));
				} else {
					toastAlert("La sesión expiró.", "error");
					dispatch(logout());
				}
			}
		);
	};

	const handleMangaEdit = (id) => {
		if (!isLogged) {
			return;
		}
		dispatch(editManga(id));
		navigate("/editar");
	};

	return (
		<>
			{filteredMangas
				.slice(
					page * rowsPerPageCount,
					page * rowsPerPageCount + rowsPerPageCount
				)
				.map(
					(
						{
							titulo,
							stock,
							deposito,
							pasillo,
							nivel,
							seccion,
							id,
							cantidad,
							categoria,
							estado,
						},
						index
					) => (
						<TableRow
							variant={stock ? undefined : "no-stock"}
							key={index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							{isLogged && (
								<TableCell component="th" scope="row" align="center">
									<Checkbox
										value={stock}
										checked={!stock}
										onChange={(e) => handleChecked(e, id, stock)}
									/>
								</TableCell>
							)}
							<TableCell
								component="th"
								scope="row"
								align="center"
								sx={{
									cursor: "pointer",
									"&:hover": { background: "#313437" },
								}}
								onClick={() => handleMangaEdit(id)}
								title={
									isLogged
										? "Clickea para editar la información del manga"
										: null
								}
							>
								{titulo.toUpperCase()}
							</TableCell>
							<TableCell align="center">{deposito}</TableCell>
							<TableCell align="center">{pasillo}</TableCell>
							<TableCell align="center">{nivel}</TableCell>
							<TableCell align="center">{seccion}</TableCell>
							<TableCell align="center">{categoria.toUpperCase()}</TableCell>
							<TableCell align="center">
								{isLogged ? (
									<TableSelect estado={estado} id={id} token={token} />
								) : (
									estado.toUpperCase()
								)}
							</TableCell>
							{/* Cantidad */}
							<TableCell align="center">
								{isLogged ? (
									<TableInput
										cantidad={cantidad}
										id={id}
										token={token}
										index={index}
									/>
								) : (
									cantidad
								)}
							</TableCell>
							{isLogged && (
								<TableCell align="center">
									<Button
										variant={!stock ? "outlined-stock" : "outlined-red"}
										onClick={() => handleMangaDelete(id, titulo)}
									>
										<Typography
											variant="span"
											component="span"
											sx={{
												marginRight: ".25rem",
											}}
										>
											Borrar
										</Typography>
										<DeleteIcon />
									</Button>
								</TableCell>
							)}
						</TableRow>
					)
				)}
		</>
	);
};
