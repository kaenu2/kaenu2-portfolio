import React from "react";

import "./NotFound.scss";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

export const NotFound = () => {
	return (
		<section className="page__not-found not-found">
			<div className="not-found__container _container">
				<div className="not-found__img">
					<img src="https://i.ibb.co/Zz7D6hm/Not-Found1.png" alt="Not Found" />
				</div>
				<div className="not-found__info">
					<h1>Not found</h1>
					<p>Страницу, которую вы ищете, не найдена.</p>
				</div>
				<hr className="not-found__hr" />
				<ButtonLink classProps="not-found__btn" label="Вернуться домой" link="/" />
			</div>
		</section>
	)
}