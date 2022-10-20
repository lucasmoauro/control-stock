import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/loginSlice/LoginSlice";
import { useState } from "react";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { toastAlert } from "../helpers/SwalToast";

export const UserNav = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const theme = useTheme();
	const isBig = useMediaQuery(theme.breakpoints.up(900));
	const { isLogged } = useSelector((state) => state.loginReducer);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleLogin = () => {
		navigate("/login");
	};
	const handleLogout = () => {
		dispatch(logout(false));
		toggleDrawer(false);
		toastAlert("Sesion cerrada.", "success");
	};
	const toggleDrawer = (open) => (e) => {
		if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
			return;
		}

		setIsDrawerOpen(open);
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{!isLogged ? (
					<ListItem disablePadding onClick={() => navigate("/login")}>
						<ListItemButton>
							<ListItemIcon>
								<LoginIcon />
							</ListItemIcon>
							<ListItemText primary="Ingresar" />
						</ListItemButton>
					</ListItem>
				) : (
					<>
						<ListItem disablePadding onClick={() => navigate("/agregar")}>
							<ListItemButton>
								<ListItemIcon>
									<AddIcon />
								</ListItemIcon>
								<ListItemText primary="Agregar Manga" />
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding onClick={handleLogout}>
							<ListItemButton>
								<ListItemIcon>
									<LogoutIcon />
								</ListItemIcon>
								<ListItemText primary="Cerrar Sesión" />
							</ListItemButton>
						</ListItem>
					</>
				)}
			</List>
		</Box>
	);

	if (!isBig) {
		return (
			<>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						marginTop: ".5rem",
						marginBottom: "1rem",
					}}
				>
					<Button variant="outlined" onClick={toggleDrawer(true)}>
						<MenuRoundedIcon />
					</Button>
				</Box>
				<Drawer
					anchor="right"
					open={isDrawerOpen}
					onClose={toggleDrawer(false)}
				>
					{list("right")}
				</Drawer>
			</>
		);
	} else {
		return (
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					marginTop: ".5rem",
					marginBottom: "1rem",
				}}
			>
				{!isLogged ? (
					<Button
						variant="contained"
						onClick={handleLogin}
						sx={{
							padding: ".5rem 2rem",
						}}
					>
						<Typography
							variant="span"
							component="span"
							sx={{
								marginRight: ".5rem",
							}}
						>
							Ingresar
						</Typography>
						<LoginIcon />
					</Button>
				) : (
					<>
						<Button variant="contained" onClick={() => navigate("/agregar")}>
							Agregar Manga
						</Button>
						<Button
							variant="outlined"
							sx={{
								marginLeft: "1rem",
							}}
							onClick={handleLogout}
						>
							<LogoutIcon />

							<Typography
								variant="span"
								component="span"
								sx={{
									marginLeft: ".25rem",
								}}
							>
								Cerrar Sesión
							</Typography>
						</Button>
					</>
				)}
			</Box>
		);
	}
};
