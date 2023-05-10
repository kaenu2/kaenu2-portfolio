import React from "react";
import { NavMenu } from "../NavMenu/NavMenu";
import { Logo } from "../Logo/Logo";

import "./Header.scss";
import { Theme } from "../Theme/Theme";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Logo classProps={'header__logo'} />
				<NavMenu classProps={'header__nav-menu'} />
				<Theme classProps={'header__theme'} />
			</div>
		</header>
	)
}