import { createTheme } from "@mui/material";
import red from "@mui/material/colors/red";

export const defaultTheme = createTheme({
	palette: {
		primary: {
			main: "#84aff3",
		},
		secondary: {
			main: "#e290f4",
		},
		mode: "dark",
		background: {
			default: "#201f24",
			paper: "#1c2124",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				text: {
					color: "#fff",
				},
			},
			variants: [
				{
					props: { variant: "outlined-red" },
					style: {
						color: red[500],
						border: `1px solid ${red[500]}`,
					},
				},
				{
					props: { variant: "outlined-stock" },
					style: {
						color: red[400],
						border: `1px solid ${red[400]}`,
					},
				},
			],
		},
		MuiTableRow: {
			variants: [
				{
					props: { variant: "no-stock" },
					style: {
						background: "#ff000082",
					},
				},
			],
		},
	},
});
