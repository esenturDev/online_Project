import { Route, Routes, useLocation } from "react-router";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";
import Error from "../pages/error/Error";
import HomeResult from "./homePages/HomeResult";
import { useState } from "react";
import ProductId from "../pages/ProductId";
import Login from "../pages/Login";
import { Resistr } from "../pages/Resistr";
import Home from "../pages/Home";
const Layout = () => {
	const { pathname } = useLocation();
	const [isStyleResult, setIsStyleResult] =  useState("")
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		);
	} else if (pathname === "/registr") {
		return (
			<Routes>
				<Route path="/registr" element={<Resistr />} />
			</Routes>
		);
	} else if (pathname === "/") {
		return (
			<Routes>
				<Route path="/" element={<HomeResult />} />
			</Routes>
		);
	}
	return (
		<div className={scss.layout}>
			<Header setIsStyleResult={setIsStyleResult}/>
			<main>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/home/:productId" element={<ProductId/>}/>
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
