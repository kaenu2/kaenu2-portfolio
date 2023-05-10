import React from "react";
import { useSelector } from "react-redux/es/exports";

import { Title } from "../../../../components/Title/Title";
import { WorksList } from "../../../../components/WorksList/WorksList";
import { IState, IWorks } from "../../../../modules";




export const AppWorks = () => {
	const works = useSelector((state: IState): IWorks[] => state.works);
	const appWorks = works.filter(elem => elem.category === 'app');
	return (
		<section className="page__work-app work-app">
			<div className="work-app__container _container">
				<Title classProps="work-app__title" label="App works" />
				<WorksList classProps="work-app" data={appWorks} />
			</div>
		</section>
	)
}