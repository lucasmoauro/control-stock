import { Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export const UserFormFooter = () => {
	return (
		<Button
			variant="contained"
			fullWidth
			sx={{
				height: "3rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			type="submit"
		>
			<Typography
				variant="span"
				component="span"
				sx={{
					marginRight: ".5rem",
					paddingTop: ".2rem"
				}}
			>
				Ingresar
			</Typography>
			<LoginIcon />
		</Button>
	);
};
