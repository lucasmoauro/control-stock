import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const UserPasswordInput = ({ setFormValues, formValues }) => {
	const [isPasswordInput, setIsPasswordInput] = useState(true);

	const handlePasswordHide = (event) => {
		setIsPasswordInput(!isPasswordInput);
		event.preventDefault();
	};

	const handleMouseDownPassword = (event) => {
		setIsPasswordInput(!isPasswordInput);
		event.preventDefault();
	};
	return (
		<Box
			sx={{
				margin: "1rem 0 1.5rem 0",
			}}
		>
			<TextField
				variant="filled"
				label="Contraseña"
				id="contraseña"
				fullWidth
				type={isPasswordInput ? "password" : "text"}
				value={formValues.password}
				onChange={(e) =>
					setFormValues({ ...formValues, password: e.target.value })
				}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								onMouseDown={handleMouseDownPassword}
								onMouseUp={handlePasswordHide}
								edge="end"
							>
								{isPasswordInput ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};
