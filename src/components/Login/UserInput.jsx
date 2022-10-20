import { Box, TextField } from "@mui/material";

export const UserInput = ({ formValues, setFormValues }) => {
	return (
		<Box
			sx={{
				margin: "2rem 0",
			}}
		>
			<TextField
				variant="filled"
				label="Usuario"
				fullWidth
				type="text"
				value={formValues.username}
				autoComplete="false"
				onChange={(e) =>
					setFormValues({ ...formValues, username: e.target.value })
				}
			/>
		</Box>
	);
};
