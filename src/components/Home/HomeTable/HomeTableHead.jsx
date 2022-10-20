import { TableCell, TableHead, TableRow } from "@mui/material";
import { useSelector } from "react-redux";

export const HomeTableHead = () => {
	const { isLogged } = useSelector((state) => state.loginReducer);
	return (
		<TableHead>
			<TableRow>
				{isLogged && <TableCell align="center">Agotado</TableCell>}
				<TableCell align="center">Manga</TableCell>
				<TableCell align="center">Deposito</TableCell>
				<TableCell align="center">Rack</TableCell>
				<TableCell align="center">Columna</TableCell>
				<TableCell align="center">Nivel</TableCell>
				<TableCell align="center">Categoria</TableCell>
				<TableCell align="center">Estado</TableCell>
				<TableCell align="center">Cantidad</TableCell>
				{isLogged && <TableCell align="center">Borrar</TableCell>}
			</TableRow>
		</TableHead>
	);
};
