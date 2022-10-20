import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { defaultTheme } from "./themes/DefaultTheme";
import { useEffect } from "react";
import { getSessionTokenValidation } from "./slices/loginSlice/LoginSlice";
import { useDispatch } from "react-redux";

const token = localStorage.getItem("ivrea");

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (token !== null) {
			dispatch(getSessionTokenValidation());
		}
	}, []); //eslint-disable-line

	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<CssBaseline />
				<AppRouter />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
