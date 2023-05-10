import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { Title } from "../../../../components/Title/Title";
import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { IState, IWorks } from "../../../../modules";
import { WorksList } from "../../../../components/WorksList/WorksList";


export const Works = () => {
	const works = useSelector((state: IState): IWorks[] => state.works);

	const worksShow = works.filter(elem => elem.show)
	return (
		<section className="page__home-work home-page-work">
			<div className="home-page-work__container _container">
				<Title classProps="home-page-work__title" label="Works" />
				<WorksList classProps="home-page-work" data={worksShow} />
				<ul className="home-page-work__list">
					{/* {
						works.slice(0, 4).map(elem => {
							const { id, image, links, title } = elem;
							return (
								<li
									key={id}
									className="home-page-work__item">
									<Link to={`works/${links}`}>
										<img src={image} alt={title} />
									</Link>
								</li>
							)
						})
					} */}
				</ul>
				<ButtonLink classProps="home-page-work__btn" label="Мои работы" link="works" />
			</div>
		</section>
	)
}