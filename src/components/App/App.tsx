import React from "react";
import { Routes, Route } from "react-router-dom";


import { HomePage } from "../../Pages/HomePage/HomePage";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { WorksPage } from "../../Pages/WorksPage/WorksPage";
import { ProductPage } from "../../Pages/ProductPage/ProductPage";
import { NotFound } from "../../Pages/NotFoundPage/NotFound";


export const App = () => {
	return (
		<>
			<Header />
			<main className="page">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/works" element={<WorksPage />} />
					<Route path="/works/:title" element={<ProductPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}