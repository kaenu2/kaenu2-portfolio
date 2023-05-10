import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { IState, IUserInfo } from "../../modules";

interface ILogo {
	classProps: string,
}

export const Logo = ({ classProps }: ILogo) => {
	const logoState = useSelector((state: IState): IUserInfo => state.userInfo);

	const { logo, userFirstNameEU, userSurnameEU } = logoState;

	return (
		<Link to={''} className={`${classProps} logo`}>
			{userFirstNameEU} {userSurnameEU}
		</Link>
	)
}