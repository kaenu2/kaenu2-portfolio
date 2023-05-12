import React from "react";
import { motion } from "framer-motion";

import "./WorksPage.scss";
import { OldWorks } from "./components/OldWorks/OldWorks";
import { ReactWorks } from "./components/ReactWorks/ReactWorks";
import { AppWorks } from "./components/AppWorks/AppWorks";

export const WorksPage = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: .3 } }}
			exit={{ opacity: 0, transition: { duration: .3 } }}
			className="page">
			<ReactWorks />
			<AppWorks />
			<OldWorks />
		</motion.main>
	)
}