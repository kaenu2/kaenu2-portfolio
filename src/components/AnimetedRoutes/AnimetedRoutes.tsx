import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import { HomePage } from "../../Pages/HomePage/HomePage";
import { WorksPage } from "../../Pages/WorksPage/WorksPage";
import { ProductPage } from "../../Pages/ProductPage/ProductPage";
import { NotFound } from "../../Pages/NotFoundPage/NotFound";





export const AnimetedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes
				location={location}
				key={location.pathname}>
				<Route path="/" element={<HomePage />} />
				<Route path="/works" element={<WorksPage />} />
				<Route path="/works/:title" element={<ProductPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	)
}