import React from "react";
import { useSelector } from "react-redux/es/exports";
import { IState, IUserInfo } from "../../../../modules";

export const About = () => {
	const userInfo = useSelector((state: IState): IUserInfo => state.userInfo);

	const { userFirstNameRU, userSurnameRU, target, photoProfile } = userInfo;
	return (
		<section className="page__home-about home-page-about">
			<div className="home-page-about__container _container">
				<p className="home-page-about__greetings">Привет, я начинающий Frontend разработчик из России!</p>
				<div className="home-page-about__about">
					<div className="home-page-about__info">
						<h2>{userFirstNameRU} {userSurnameRU}</h2>
						<p><strong>Цель: </strong> {target}</p>
					</div>
					{/* <img src="https://i.ibb.co/WnZpccq/avatar-2.jpg" alt="Profile image" /> */}
					{/* <img src="https://i.ibb.co/z6H1Fsh/myPhoto.jpg" alt="Profile image" /> */}
					<img src={photoProfile} alt="ProfileImage" />
				</div>
			</div>
		</section>
	)
}