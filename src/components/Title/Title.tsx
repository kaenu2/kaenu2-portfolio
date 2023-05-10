import React from "react";

interface ITitle {
	classProps: string,
	label: string,
}

export const Title = ({ classProps, label }: ITitle) => {
	return (
		<div className={`${classProps} title`}>
			<h3>{label}</h3>
		</div>
	)
}