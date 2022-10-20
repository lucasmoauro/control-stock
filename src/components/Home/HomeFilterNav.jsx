import { useState } from "react";
import { Box, Drawer, Paper } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { HomeFilterNavHeader, HomeFilterNavBody } from "./HomeFilter";

export const HomeFilterNav = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const handleDrawerOpen = (open) => (e) => {
		if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
			return;
		}

		setIsDrawerOpen(open);
	};
	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
		>
			<HomeFilterNavHeader handleDrawerOpen={handleDrawerOpen} />
			<HomeFilterNavBody setIsDrawerOpen={setIsDrawerOpen} />
		</Box>
	);

	return (
		<>
			<Box
				sx={{
					position: "fixed",
					height: "100%",
					width: "10%",
					zIndex: "10",
					left: "0",
					top: "0",
				}}
			>
				<Box
					sx={{
						position: "fixed",
						display: "flex",
						alignItems: "center",
						paddingLeft: "1rem",
						height: "100%",
						width: "10%",
						zIndex: "10",
						left: "0",
						top: "0",
					}}
				>
					<Paper
						elevation={12}
						sx={{
							display: "flex",
							alignItems: "center",
							padding: ".5rem .75rem",
							cursor: "pointer",
						}}
						onClick={handleDrawerOpen(true)}
					>
						<FilterAltIcon />
					</Paper>
				</Box>
			</Box>

			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClose={handleDrawerOpen(false)}
			>
				{list("left")}
			</Drawer>
		</>
	);
};
