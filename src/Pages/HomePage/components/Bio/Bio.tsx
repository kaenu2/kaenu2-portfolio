import React from "react";
import { useSelector } from "react-redux/es/exports";

import { Title } from "../../../../components/Title/Title";
import { IBio, IState } from "../../../../modules";


export const Bio = () => {
	const userInfoBio = useSelector((state: IState): IBio[] => state.userInfo.bio);

	return (
		<section className="page__home-bio home-bio">
			<div className="home-bio__container _container">
				<Title classProps="home-bio__title" label="BIO" />
				<div className="home-bio__info">
					{
						userInfoBio.map(elem => {
							const { id, info, year } = elem;
							const a = info.split("/");
							return (
								<div
									key={id}
									className="home-bio__text">
									<span>{year}</span> <p>{a[0]}{a[1] ? <strong>{a[1]}</strong> : ''}{a[2] ? a[2] : ''}</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}