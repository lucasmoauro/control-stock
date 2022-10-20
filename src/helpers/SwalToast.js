import Swal from "sweetalert2";
export const toastAlert = (title, icon) => {
	Swal.fire({
		title,
		icon,
		toast: true,
		position: "bottom-end",
		timer: 2000,
		timerProgressBar: true,
		showConfirmButton: false,
		background: "#2e3235",
		color: "#fff",
		allowEscapeKey: true
	});
};
