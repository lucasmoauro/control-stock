import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";
import { MangaForm } from "../components/Manga/MangaForm";
import { useDispatch, useSelector } from "react-redux";
import {
	getManga,
	initialMangaState,
	postManga,
	putManga,
} from "../slices/mangaSlice/MangaSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toastAlert } from "../helpers/SwalToast";
import { logout } from "../slices/loginSlice/LoginSlice";

export const MangaPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const path = pathname.split("/")[1];

	const { newMangaData } = useSelector((state) => state.mangaReducer);
	const { token } = useSelector((state) => state.loginReducer);

	const handleBack = () => {
		dispatch(initialMangaState());

		navigate("/");
	};
	const handleSubmit = (e) => {
		//Si edita manda un dispatch sino envia otro para crear el manga en DB
		e.preventDefault();
		if (path === "editar") {
			dispatch(putManga({ newMangaData, token })).then(({ payload }) => {
				if (payload.status === 200) {
					toastAlert("Manga editado.", "success");
					navigate("/");
					dispatch(initialMangaState());
				} else {
					navigate("/");
					dispatch(logout());
					toastAlert("La sesion expiro.", "error");
				}
			});
		} else {
			dispatch(postManga({ newMangaData, token })).then(({ payload }) => {
				if (payload.status === 201) {
					toastAlert("Manga creado.", "success");
					navigate("/");
					dispatch(initialMangaState());
				} else {
					navigate("/");
					dispatch(logout());
					toastAlert("La sesion expiro.", "error");
				}
			});
		}
	};

	useEffect(() => {
		if (path === "editar") {
			dispatch(getManga(newMangaData.id));
		} else {
			return;
		}
	}, []); //eslint-disable-line

	return (
		<Container>
			<header>
				<Box sx={{ margin: "1rem 0 2rem 0" }}>
					<Button variant="contained" onClick={handleBack}>
						<ArrowBackIcon /> Volver
					</Button>
				</Box>
			</header>
			<main className="animate__animated animate__fadeIn">
				<form onSubmit={handleSubmit}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							marginTop: "3rem",
							marginBottom: "1rem",
						}}
					>
						<MangaForm />
					</Box>
				</form>
			</main>
		</Container>
	);
};
