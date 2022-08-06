import React, { useReducer } from "react";

const inputReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.value,
				isValid: true,
			};
		default:
			return state;
	}
};

const Input = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: "",
		isValid: false,
	});

	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				className="border-2 border-slate-200 mx-5 px-2 py-1 rounded-xl"
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				className="border-2 border-slate-200 rounded-xl font-medium"
			/>
		);
	return (
		<div
			className={`shadow-lg w-fit  rounded-xl px-10 py-12 mx-auto my-5 font-mono font-semibold`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
		</div>
	);
};

export default Input;
