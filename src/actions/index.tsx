import { IAction } from "../modules";

const onClickAction = (id: string): IAction => {
	return { type: 'NAME', payload: id };
}


export {
	onClickAction,
}