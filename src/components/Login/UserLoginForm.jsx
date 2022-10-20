import { Box } from "@mui/material";
import { UserForm } from "./UserForm";

export const UserLoginForm = ({ setFormValues, formValues }) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				marginTop: "3rem",
			}}
		>
			<UserForm setFormValues={setFormValues} formValues={formValues} />
		</Box>
	);
};
