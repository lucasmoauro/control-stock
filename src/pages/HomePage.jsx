import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserNav } from "../components/UserNav";
import { Loader } from "../components/Loader/Loader";
import { HomeTable } from "../components/Home/HomeTable";
import { UserInputText } from "../components/UserInputText";
import { HomeFilterNav } from "../components/Home/HomeFilterNav";

import { getMangasList } from "../slices/mangaSlice/MangaSlice";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const HomePage = () => {
	const dispatch = useDispatch();
	const rowsPerPage = Number(sessionStorage.getItem("rows"));
	const sessionStoragePage = Number(sessionStorage.getItem("page"));

	const [rowsPerPageCount, setRowsPerPageCount] = useState(rowsPerPage || 25);
	const [page, setPage] = useState(sessionStoragePage || 0);
	const { mangas } = useSelector((state) => state.mangaReducer);
	const filters = useSelector((state) => state.filterReducer);

	useEffect(() => {
		dispatch(getMangasList());
	}, []); //eslint-disable-line

	useEffect(() => {
		sessionStorage.setItem("filters", JSON.stringify(filters));
	}, [filters]); //eslint-disable-line

	return (
		<Container fixed>
			{/* Filtro */}
			{mangas.length >= 1 && <HomeFilterNav />}
			{/* Loader y listado de mangas */}
			{!mangas.length ? (
				<Loader />
			) : (
				<>
					<header>
						<UserNav />
					</header>

					<main>
						<UserInputText
							setPage={setPage}
							rowsPerPageCount={rowsPerPageCount}
						/>
						<Box
							sx={{
								marginTop: "2rem",
							}}
							className="animate__animated animate__fadeIn"
						>
							<HomeTable
								page={page}
								setPage={setPage}
								rowsPerPageCount={rowsPerPageCount}
								setRowsPerPageCount={setRowsPerPageCount}
							/>
						</Box>
					</main>
				</>
			)}
		</Container>
	);
};
