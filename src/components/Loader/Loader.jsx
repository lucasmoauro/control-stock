import { Paper, Typography } from "@mui/material";
import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Paper
				elevation={3}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					padding: "2rem",
				}}
			>
				<ColorRing
					visible={true}
					height="120"
					width="120"
					ariaLabel="blocks-loading"
					wrapperStyle={{}}
					wrapperClass="blocks-wrapper"
					colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
				/>
				<Typography variant="h4" component="h4">
					Cargando...
				</Typography>
			</Paper>
		</div>
	);
};
