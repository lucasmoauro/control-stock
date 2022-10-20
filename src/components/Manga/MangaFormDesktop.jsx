import { Box, Button, Paper, Typography } from "@mui/material";
import { MangaInput } from "./MangaInput";
import { MangaSelect } from "./MangaSelect";

export const MangaFormDesktop = ({ path }) => {
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
					{path === "agregar" ? "Crear manga" : "Editar manga"}
				</Typography>
			</Box>
			{/* Manga */}
			<MangaInput label="Manga" inputName="titulo" required={true} />
			{/* Deposito */}
			<MangaSelect selectName="deposito" label="Deposito" />
			{/* Rack */}
			<MangaInput label="Rack" inputName="pasillo" required={true} />
			{/* Nivel */}
			<MangaInput label="Nivel" inputName="nivel" required={true} />
			{/* Columna */}
			<MangaInput label="Columna" inputName="seccion" required={true} />
			{/* Categoria */}
			<MangaSelect selectName="categoria" label="Categoria" />
			{/* Estado */}
			<MangaSelect selectName="estado" label="Estado" />
			{/* Cantidad */}
			<MangaInput label="Cantidad" inputName="cantidad" inputType="number" />
			<Box
				sx={{
					margin: "1rem 0",
					width: "80%",
				}}
			>
				<Button
					variant="contained"
					fullWidth
					sx={{
						height: "3rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					type="submit"
				>
					<Typography
						variant="span"
						component="span"
						sx={{
							marginRight: ".5rem",
						}}
					>
						{path === "agregar" ? "Crear" : "Editar"}
					</Typography>
				</Button>
			</Box>
		</Paper>
	);
};
