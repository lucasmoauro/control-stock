import { Paper, Table, TableContainer } from "@mui/material";
import { HomeTableBody, HomeTableFooter, HomeTableHead } from "./HomeTable/";

export const HomeTable = ({
	page,
	setPage,
	rowsPerPageCount,
	setRowsPerPageCount,
}) => {
	return (
		<TableContainer
			component={Paper}
			sx={{
				marginBottom: "1rem",
			}}
		>
			<Table sx={{ minWidth: 650 }}>
				<HomeTableHead />
				<HomeTableBody page={page} rowsPerPageCount={rowsPerPageCount} />
				<HomeTableFooter
					page={page}
					setPage={setPage}
					rowsPerPageCount={rowsPerPageCount}
					setRowsPerPageCount={setRowsPerPageCount}
				/>
			</Table>
		</TableContainer>
	);
};
