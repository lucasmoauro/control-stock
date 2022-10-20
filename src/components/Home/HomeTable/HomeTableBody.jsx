import { TableBody } from "@mui/material";
import { HomeTableBodyRow } from "./HomeTableBodyRow";

export const HomeTableBody = ({ page, rowsPerPageCount }) => {
	return (
		<TableBody>
			<HomeTableBodyRow page={page} rowsPerPageCount={rowsPerPageCount} />
		</TableBody>
	);
};
