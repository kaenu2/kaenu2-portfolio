import React from "react";

import "./HomePage.scss";
import { About } from "./components/About/About";
import { Bio } from "./components/Bio/Bio";
import { Works } from "./components/Works/Works.";
import { Stack } from "./components/Stack/Stack";
import { Links } from "./components/Links/Links";
import { Hobby } from "./components/Hobby/Hobby";

export const HomePage = () => {
	return (
		<>
			<About />
			<Stack />
			<Works />
			<Bio />
			<Hobby />
			<Links />
		</>
	)
}