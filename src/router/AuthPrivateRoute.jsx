import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthPrivateRoute = ({ children }) => {
	const { isLogged } = useSelector((state) => state.loginReducer);

	return !isLogged ? children : <Navigate to="/" />;
};
