import React from "react";
import { Link } from "react-router-dom";

import "./WorksList.scss";

import { IWorks } from "../../modules";

interface IWorksList {
	classProps: string,
	data: IWorks[],
}


export const WorksList = ({ classProps, data }: IWorksList) => {
	return (
		<ul className={`${classProps}__list work-list`}>
			{
				data.map(elem => {
					const { id, image, links, title } = elem;
					return (
						<li key={id} className="work-list__item">
							<Link to={`/works/${links}`} className="work-list__link">
								<img src={image} alt={title} />
								<h2>{title}</h2>
							</Link>
						</li>
					)
				})
			}
		</ul>
	)
}