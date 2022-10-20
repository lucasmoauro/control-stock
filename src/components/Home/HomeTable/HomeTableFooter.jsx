import {
	TableCell,
	TableFooter,
	TablePagination,
	TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";

export const HomeTableFooter = ({
	page,
	setPage,
	setRowsPerPageCount,
	rowsPerPageCount,
}) => {
	const { mangas } = useSelector((state) => state.mangaReducer);

	const handleChangeRowsPerPage = (e) => {
		if (e.target.value === -1) {
			setPage(0);
			setRowsPerPageCount(e.target.value);
		}

		setRowsPerPageCount(e.target.value);
	};

	const handleChangePage = (event, newPage) => {
		localStorage.setItem("page", newPage);
		setPage(newPage);
	};

	return (
		<TableFooter>
			<TableRow
				colSpan={7}
				sx={{
					borderTop: 0.25,
				}}
			>
				<TableCell
					colSpan={9}
					sx={{
						paddingY: 0,
					}}
				>
					<TablePagination
						component="div"
						count={mangas.length}
						rowsPerPageOptions={[25, 50, 100, { value: -1, label: "Todo" }]}
						page={page}
						onPageChange={handleChangePage}
						rowsPerPage={rowsPerPageCount}
						onRowsPerPageChange={handleChangeRowsPerPage}
						labelRowsPerPage={"Filas por página"}
					/>
				</TableCell>
			</TableRow>
		</TableFooter>
	);
};
