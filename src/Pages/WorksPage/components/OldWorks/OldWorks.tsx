import React from "react";
import { useSelector } from "react-redux/es/exports";


import { Title } from "../../../../components/Title/Title";
import { WorksList } from "../../../../components/WorksList/WorksList";

import { IState, IWorks } from "../../../../modules";

export const OldWorks = () => {
	const works = useSelector((state: IState): IWorks[] => state.works);
	const oldWorks = works.filter(elem => elem.category === 'old');

	return (
		<section className="page__works-old works-old">
			<div className="works-old__container _container">
				<Title classProps="works-old__title" label="Old works" />
				<WorksList classProps="works-old" data={oldWorks} />
			</div>
		</section>
	)
}