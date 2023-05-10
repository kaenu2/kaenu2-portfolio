import React from "react";
import { Link } from "react-router-dom";


import "./ButtonLink.scss";

interface IButtonLink {
	link: string,
	classProps: string,
	label: string,
}

export const ButtonLink = ({ link, classProps, label }: IButtonLink) => {
	return (
		<div className="btn-link__container">
			<Link to={link} className={`${classProps} btn-link`}>{label}</Link>
		</div>
	)
}