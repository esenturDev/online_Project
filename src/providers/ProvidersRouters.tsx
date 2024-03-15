import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

interface ProviderRoutesProps {
	children: ReactNode;
}

export const ProviderRoutes: FC<ProviderRoutesProps> = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isAuthUsers = localStorage.getItem("isAuthUsers");
	const isAuthUsersResult = !!isAuthUsers;

	useEffect(() => {
		if (isAuthUsersResult && pathname === "/login") {
			navigate("/home");
		} else if (isAuthUsersResult && pathname === "/") {
			navigate("/home");
		} else if (isAuthUsersResult && pathname === "/registr") {
			navigate("/home");
		} else if (!isAuthUsersResult && pathname === "/home") {
			navigate("/");
		}
	}, [pathname]);
	return children;
};
