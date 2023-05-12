import React from "react";
import { motion } from "framer-motion";

import "./NotFound.scss";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

export const NotFound = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: .3 } }}
			exit={{ opacity: 0, transition: { duration: .3 } }}
			className="page">
			<section className="page__not-found not-found">
				<div className="not-found__container _container">
					<div className="not-found__info">
						<h1>Not found</h1>
						<p>Страницу, которую вы ищете, не найдена.</p>
					</div>
					<hr className="not-found__hr" />
					<ButtonLink classProps="not-found__btn" label="Вернуться домой" link="/" />
				</div>
			</section>
		</motion.main>
	)
}