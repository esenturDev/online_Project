import { Route, Routes, useLocation } from "react-router";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";
import LoginPages from "../pages/loginPages/LoginPages";
import { RegistrPages } from "../pages/tegistrPages/RegistrPages";
import { HomePages } from "../pages/home/HomePages";
import Error from "../pages/error/Error";
import HomeResult from "../homePages/HomeResult";
const Layout = () => {
	const { pathname } = useLocation();
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<LoginPages />} />
			</Routes>
		);
	} else if (pathname === "/registr") {
		return (
			<Routes>
				<Route path="/registr" element={<RegistrPages />} />
			</Routes>
		);
	}
	return (
		<div className={scss.layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/home" element={<HomePages />} />
					
					<Route path="/" element={<HomeResult />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
