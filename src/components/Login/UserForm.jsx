import {
	Box,
	Checkbox,
	Paper,
	Typography,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { UserFormFooter } from "./UserFormFooter";
import { UserInput } from "./UserInput";
import { UserPasswordInput } from "./UserPasswordInput";

export const UserForm = ({ formValues, setFormValues }) => {
	const theme = useTheme();
	const isBig = useMediaQuery(theme.breakpoints.up(900));
	const isUserSaved = localStorage.getItem("rememberUsername");

	const handleRememberUsername = (e) => {
		setFormValues({ ...formValues, remember: e.target.checked });
		if (e.target.checked) {
			localStorage.setItem("username", formValues.username);
			localStorage.setItem("rememberUsername", JSON.stringify(true));
		} else {
			localStorage.setItem("rememberUsername", JSON.stringify(false));
			localStorage.removeItem("username");
		}
	};

	if (!isBig) {
		return (
			<Paper
				sx={{
					width: "93%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "column",
					padding: "2rem 0",
				}}
				elevation={3}
			>
				<Box>
					<Typography component="p" variant="h5">
						Ingresar
					</Typography>
				</Box>

				<Box
					sx={{
						margin: "2rem 0",
						width: "80%",
					}}
				>
					<UserInput formValues={formValues} setFormValues={setFormValues} />

					<UserPasswordInput
						formValues={formValues}
						setFormValues={setFormValues}
					/>
					<Box
						sx={{
							margin: "2rem 0",
						}}
					>
						<Checkbox
							value={JSON.parse(isUserSaved) || formValues.remember}
							checked={JSON.parse(isUserSaved) || formValues.remember}
							onChange={handleRememberUsername}
							id="checkbox"
						/>
						<label
							htmlFor="checkbox"
							style={{
								cursor: "pointer",
							}}
						>
							Recordar usuario
						</label>
					</Box>

					<UserFormFooter />
				</Box>
			</Paper>
		);
	} else {
		return (
			<Paper
				sx={{
					width: "30%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "column",
					padding: "2rem 0",
				}}
				elevation={3}
			>
				<Box>
					<Typography component="p" variant="h5">
						Ingresar
					</Typography>
				</Box>

				<Box
					sx={{
						margin: "2rem 0",
						width: "80%",
					}}
				>
					<UserInput formValues={formValues} setFormValues={setFormValues} />

					<UserPasswordInput
						formValues={formValues}
						setFormValues={setFormValues}
					/>

					<Box
						sx={{
							margin: "1.5rem auto",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
							width: "70%",
						}}
						border={1}
					>
						<Checkbox
							value={JSON.parse(isUserSaved) || formValues.remember}
							checked={JSON.parse(isUserSaved) || formValues.remember}
							onChange={handleRememberUsername}
							id="checkbox"
						/>
						<label
							htmlFor="checkbox"
							style={{
								cursor: "pointer",
							}}
						>
							Recordar usuario
						</label>
					</Box>

					<UserFormFooter />
				</Box>
			</Paper>
		);
	}
};
