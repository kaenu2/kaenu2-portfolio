import React from "react";
import { useSelector } from "react-redux/es/exports";

import { Title } from "../../../../components/Title/Title";
import { IStack, IState } from "../../../../modules";


export const Stack = () => {
	const userStack = useSelector((state: IState): IStack[] => state.stack);

	return (
		<section className="page__home-stack home-page-stack">
			<div className="home-page-stack__container _container">
				<Title classProps="home-page-stack__title" label="Stack" />
				<ul className="home-page-stack__list">
					{
						userStack.map(elem => {
							const { id, label, link } = elem;
							return (
								<li
									key={id}
									className="home-page-stack__item">
									<a
										href={link}
										target="_blank">{label}</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		</section>
	)
}