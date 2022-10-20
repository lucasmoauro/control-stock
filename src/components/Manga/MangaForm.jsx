import { useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { MangaFormDesktop } from "./MangaFormDesktop";
import { MangaFormMobile } from "./MangaFormMobile";

export const MangaForm = () => {
	const theme = useTheme();
	const isBig = useMediaQuery(theme.breakpoints.up(900));
	const { pathname } = useLocation();

	const path = pathname.split("/")[1];

	if (isBig) {
		return <MangaFormDesktop path={path} />;
	} else {
		return <MangaFormMobile path={path} />;
	}
};
