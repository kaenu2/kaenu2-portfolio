import React from "react";
import { useSelector } from "react-redux/es/exports";

import { Title } from "../../../../components/Title/Title";
import { IState, IUserInfo } from "../../../../modules";


export const Hobby = () => {
	const userInfo = useSelector((state: IState): IUserInfo => state.userInfo);
	const { like } = userInfo;

	return (
		<section className="page__home-hobby home-page-hobby">
			<div className="home-page-hobby__contaimer _container">
				<Title classProps="home-page-hobby__title" label="I like" />
				{/* <Title classProps="home-page-hobby__title" label="I &#10084;" /> */}
				<p>
					{
						like.map(elem => elem.info).join(', ')
					}
				</p>
			</div>
		</section>
	)
}