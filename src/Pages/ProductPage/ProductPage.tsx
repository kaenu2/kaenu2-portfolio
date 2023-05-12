import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { motion } from "framer-motion";

import "./ProductPage.scss";
import { IState, IWorks } from "../../modules";

export const ProductPage = () => {
	const loc = useLocation();
	const linkLoc = loc.pathname.split('/')[1];
	const parm = useParams();

	const works = useSelector((state: IState): IWorks[] => state.works);
	const work = works.filter((elem: IWorks): boolean => elem.links === parm.title)[0];

	const { image, links, title, screens, stack, website, year, desc, source } = work;

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: .3 } }}
			exit={{ opacity: 0, transition: { duration: .3 } }}
			className="page">
			<section className="page__product-work product-work">
				<div className="product-work__container _container">
					<div className="product-work__link">
						<Link to={`../${linkLoc}`}>{linkLoc}</Link> <span className="product-work__icon icon-arrow">
							<svg width="8px" height="11px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
								<title>arrow_right</title>
								<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
									<g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="currentColor">
										<g id="icons" transform="translate(56.000000, 160.000000)">
											<path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]">
											</path>
										</g>
									</g>
								</g>
							</svg></span> <h2>{title}</h2> <span className="product-work__year">{year}-</span>
					</div>
					<p className="product-work__desc">{desc}</p>
					<ul className="product-work__list">
						<li className="product-work__item">
							<span>website</span> <a href={website} target="_blank">{title}
								<svg fill="currentColor" width="16px" height="16px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
									<rect id="Icons" x="-896" y="0" width="1280" height="800" style={{ fill: "none" }} />
									<g id="Icons1">
										<g id="Strike">
										</g>
										<g id="H1">
										</g>
										<g id="H2">
										</g>
										<g id="H3">
										</g>
										<g id="list-ul">
										</g>
										<g id="hamburger-1">
										</g>
										<g id="hamburger-2">

										</g>

										<g id="list-ol">

										</g>

										<g id="list-task">

										</g>

										<g id="trash">

										</g>

										<g id="vertical-menu">

										</g>

										<g id="horizontal-menu">

										</g>

										<g id="sidebar-2">

										</g>

										<g id="Pen">

										</g>

										<g id="Pen1">

										</g>

										<g id="clock">

										</g>

										<g id="external-link">

											<path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z" />

											<path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z" />

										</g>

										<g id="hr">

										</g>

										<g id="info">

										</g>

										<g id="warning">

										</g>

										<g id="plus-circle">

										</g>

										<g id="minus-circle">

										</g>

										<g id="vue">

										</g>

										<g id="cog">

										</g>

										<g id="logo">

										</g>

										<g id="radio-check">

										</g>

										<g id="eye-slash">

										</g>

										<g id="eye">

										</g>

										<g id="toggle-off">

										</g>

										<g id="shredder">

										</g>

										<g id="spinner--loading--dots-">

										</g>

										<g id="react">

										</g>

										<g id="check-selected">

										</g>

										<g id="turn-off">

										</g>

										<g id="code-block">

										</g>

										<g id="user">

										</g>

										<g id="coffee-bean">

										</g>

										<g id="coffee-beans">

											<g id="coffee-bean1">

											</g>

										</g>

										<g id="coffee-bean-filled">

										</g>

										<g id="coffee-beans-filled">

											<g id="coffee-bean2">

											</g>

										</g>

										<g id="clipboard">

										</g>

										<g id="clipboard-paste">

										</g>

										<g id="clipboard-copy">

										</g>

										<g id="Layer1">

										</g>

									</g>

								</svg>
							</a>
						</li>
						<li className="product-work__item">
							<span>Stack</span> <p>{stack}</p>
						</li>
						<li className="product-work__item">
							<span>source</span> <a href={source} target="_blank">{source}
								<svg fill="currentColor" width="16px" height="16px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
									<rect id="Icons" x="-896" y="0" width="1280" height="800" style={{ fill: "none" }} />
									<g id="Icons1">
										<g id="Strike">
										</g>
										<g id="H1">
										</g>
										<g id="H2">
										</g>
										<g id="H3">
										</g>
										<g id="list-ul">
										</g>
										<g id="hamburger-1">
										</g>
										<g id="hamburger-2">

										</g>

										<g id="list-ol">

										</g>

										<g id="list-task">

										</g>

										<g id="trash">

										</g>

										<g id="vertical-menu">

										</g>

										<g id="horizontal-menu">

										</g>

										<g id="sidebar-2">

										</g>

										<g id="Pen">

										</g>

										<g id="Pen1">

										</g>

										<g id="clock">

										</g>

										<g id="external-link">

											<path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z" />

											<path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z" />

										</g>

										<g id="hr">

										</g>

										<g id="info">

										</g>

										<g id="warning">

										</g>

										<g id="plus-circle">

										</g>

										<g id="minus-circle">

										</g>

										<g id="vue">

										</g>

										<g id="cog">

										</g>

										<g id="logo">

										</g>

										<g id="radio-check">

										</g>

										<g id="eye-slash">

										</g>

										<g id="eye">

										</g>

										<g id="toggle-off">

										</g>

										<g id="shredder">

										</g>

										<g id="spinner--loading--dots-">

										</g>

										<g id="react">

										</g>

										<g id="check-selected">

										</g>

										<g id="turn-off">

										</g>

										<g id="code-block">

										</g>

										<g id="user">

										</g>

										<g id="coffee-bean">

										</g>

										<g id="coffee-beans">

											<g id="coffee-bean1">

											</g>

										</g>

										<g id="coffee-bean-filled">

										</g>

										<g id="coffee-beans-filled">

											<g id="coffee-bean2">

											</g>

										</g>

										<g id="clipboard">

										</g>

										<g id="clipboard-paste">

										</g>

										<g id="clipboard-copy">

										</g>

										<g id="Layer1">

										</g>

									</g>

								</svg>
							</a>
						</li>
					</ul>
					<ul className="product-work__list-img">
						{
							screens.map(elem => {
								const { id, image } = elem;
								return (
									<li key={id} className="product-work__item-img">
										<img src={image} alt={`${title} ${id}`} />
									</li>
								)
							})
						}
					</ul>
				</div>
			</section>
		</motion.main>
	)
}