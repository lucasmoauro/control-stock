import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MangaPage } from "../pages/MangaPage";
import { AuthPrivateRoute } from "./AuthPrivateRoute";
import { PrivateRoute } from "./PrivateRoute";
export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />

			<Route
				path="/login"
				element={
					<AuthPrivateRoute>
						<LoginPage />
					</AuthPrivateRoute>
				}
			/>
			<Route
				path="/agregar"
				element={
					<PrivateRoute>
						<MangaPage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/editar"
				element={
					<PrivateRoute>
						<MangaPage />
					</PrivateRoute>
				}
			/>
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};
