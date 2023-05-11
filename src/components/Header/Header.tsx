import React, { useState } from "react";
import { NavMenu } from "../NavMenu/NavMenu";
import { Logo } from "../Logo/Logo";

import "./Header.scss";
import { Theme } from "../Theme/Theme";

export const Header = () => {
	const [navMenu, setOpenNavMenu] = useState(false);
	return (
		<header className="header">
			<div className="header__container">
				<Logo classProps={'header__logo'} />
				<NavMenu classProps={'header__nav-menu'} openNavMeny={navMenu} />
				<div className="header__active-panel">
					<Theme classProps={'header__theme'} />
					<div className="header__icon-bgc">
						<div className={navMenu ? "header__icon _active" : "header__icon"} onClick={() => setOpenNavMenu(prev => !prev)}><span></span></div>
					</div>
				</div>
			</div>
		</header>
	)
}