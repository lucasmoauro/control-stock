import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginToken, loginUpdate } from "../slices/loginSlice/LoginSlice";
import { UserLoginForm } from "../components/Login";
import { useEffect, useState } from "react";
import { toastAlert } from "../helpers/SwalToast";

export const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({
		username: "",
		password: "",
		remember: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formValues.remember) {
			localStorage.setItem("username", formValues.username);
		}

		dispatch(getLoginToken(formValues)).then(({ payload }) => {
			if (payload.status === 200) {
				dispatch(loginUpdate());

				navigate("/");

				toastAlert("Ingreso correcto.", "success");
			} else {
				toastAlert("Usuario o Contraseña incorrectos.", "error");
			}
		});
	};

	useEffect(() => {
		if (localStorage.getItem("username") !== null) {
			setFormValues({
				...formValues,
				username: localStorage.getItem("username"),
				remember: true,
			});
		}
	}, []); //eslint-disable-line

	return (
		<Container>
			<header>
				<Box sx={{ margin: "1rem 0 2rem 0" }}>
					<Button variant="contained" onClick={() => navigate("/")}>
						<ArrowBackIcon /> Volver
					</Button>
				</Box>
			</header>
			<main className="animate__animated animate__fadeIn">
				<form onSubmit={handleSubmit}>
					<UserLoginForm
						setFormValues={setFormValues}
						formValues={formValues}
					/>
				</form>
			</main>
		</Container>
	);
};
