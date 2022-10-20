import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const HomeFilterNavHeader = ({ handleDrawerOpen }) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-end",
				margin: ".5rem .5rem 0 0",
			}}
		>
			<Button
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					paddingLeft: ".5rem",
				}}
				onClick={handleDrawerOpen(false)}
				onKeyDown={handleDrawerOpen(false)}
			>
				<ArrowBack />
			</Button>
		</Box>
	);
};
