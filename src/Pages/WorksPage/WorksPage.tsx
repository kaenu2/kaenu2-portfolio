import React from "react";

import "./WorksPage.scss";
import { OldWorks } from "./components/OldWorks/OldWorks";
import { ReactWorks } from "./components/ReactWorks/ReactWorks";
import { AppWorks } from "./components/AppWorks/AppWorks";

export const WorksPage = () => {
	return (
		<>
			<section className="promo-img">
				<div className="promo-img__container _container">
					<div className="promo-img__img">
						<img src="https://i.ibb.co/4FVM4br/coder.png" alt="coder" />
					</div>
				</div>
			</section>
			<ReactWorks />
			<AppWorks />
			<OldWorks />
		</>
	)
}