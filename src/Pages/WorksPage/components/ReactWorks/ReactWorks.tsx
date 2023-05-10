import React from "react";
import { useSelector } from "react-redux/es/exports";

import { Title } from "../../../../components/Title/Title";
import { WorksList } from "../../../../components/WorksList/WorksList";

import { IState, IWorks } from "../../../../modules";


export const ReactWorks = () => {
	const works = useSelector((state: IState): IWorks[] => state.works);
	const reactWorks = works.filter(elem => elem.category === 'react');

	return (
		<section className="page__work-react work-react">
			<div className="work-react__container _container">
				<Title classProps="work-react__title" label="React works" />
				<WorksList classProps="work-react" data={reactWorks} />
			</div>
		</section>
	)
}