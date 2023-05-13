import React from "react";

import { Header } from "../Header/Header";
import { AnimetedRoutes } from "../AnimetedRoutes/AnimetedRoutes";
import { Footer } from "../Footer/Footer";


export const App = () => {
	return (
		<>
			<Header />
			{/* <div className="promo-img">
				<div className="promo-img__container _container">
					<div className="promo-img__img">
						<img src="https://i.ibb.co/4FVM4br/coder.png" alt="coder" />
					</div>
				</div>
			</div> */}
			<AnimetedRoutes />
			<Footer />
		</>
	)
}