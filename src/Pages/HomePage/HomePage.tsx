import React from "react";

import { motion } from "framer-motion";

import "./HomePage.scss";
import { About } from "./components/About/About";
import { Bio } from "./components/Bio/Bio";
import { Works } from "./components/Works/Works.";
import { Stack } from "./components/Stack/Stack";
import { Links } from "./components/Links/Links";
import { Hobby } from "./components/Hobby/Hobby";

export const HomePage = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: .3 } }}
			exit={{ opacity: 0, transition: { duration: .3 } }}
			className="page">
			<About />
			<Stack />
			<Works />
			<Bio />
			<Hobby />
			<Links />
		</motion.main>
	)
}