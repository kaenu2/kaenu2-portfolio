import React from "react";
import { useSelector } from "react-redux/es/exports";

import "./Footer.scss";
import { IFooterInfo, IState } from "../../modules";

export const Footer = () => {
	const footerInfo = useSelector((state: IState): IFooterInfo => state.footerInfo);

	const { label } = footerInfo;

	return (
		<footer className="footer">
			<div className="footer__container _container">
				<p>{label}</p>
			</div>
		</footer>
	)
}