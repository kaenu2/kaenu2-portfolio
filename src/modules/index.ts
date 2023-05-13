export interface IState {
	userInfo: IUserInfo,
	navMenu: INavMenu[],
	stack: IStack[],
	works: IWorks[],
	footerInfo: IFooterInfo,
}

export interface IAction {
	type: string,
	payload?: any,
}

export interface INavMenu {
	id: number,
	label: string,
	link: string,
}

export interface IUserInfo {
	userFirstNameEU: string,
	userSurnameEU: string,
	userFirstNameRU: string,
	userSurnameRU: string,
	photoProfile: string,
	logo: string,
	aboutme: string,
	bio: IBio[],
	like: ILike[],
	links: ILinks[],
}

export interface IBio {
	id: number,
	year: number,
	info: string,
}
export interface ILike {
	id: number,
	info: string,
}
export interface ILinks {
	id: number,
	label: string,
	link: string,
	soc: string
}

export interface IStack {
	id: number,
	label: string,
	link: string,
}

export interface IWorks {
	id: number,
	title: string,
	image: string,
	links: string,
	category: string,
	website: string,
	year: number,
	stack: string,
	screens: IScreens[],
	desc: string,
	source: string,
	show: boolean,
}

export interface IFooterInfo {
	label: string,
}

export interface IScreens {
	id: number,
	image: string,
}