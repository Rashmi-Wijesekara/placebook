import React, { useReducer, useEffect } from "react";
import { validate } from "../../utils/validators";

const inputReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.val,
				isValid: validate(action.val, action.validators),
			};
		case "TOUCH":
			return {
				...state,
				isTouched: true,
			};
		default:
			return state;
	}
};

const Input = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: "",
		isValid: false,
		isTouched: false,
	});

	const { id, onInput } = props;
	const { value, isValid } = inputState;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	const changeHandler = (event) => {
		dispatch({
			type: "CHANGE",
			val: event.target.value,
			validators: props.validators,
		});
	};

	const touchHandler = (event) => {
		dispatch({
			type: "TOUCH",
		});
	};

	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
				className={`border-2 w-full border-slate-200 rounded-2 px-2 py-1 rounded-xl focus:outline-none focus:border-slate-400 ${
					!inputState.isValid &&
					inputState.isTouched &&
					"border-red-400"
				}`}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
				className={`resize-none w-full border-2 px-2 py-1 border-slate-200 rounded-xl font-medium focus:outline-none focus:border-slate-400 ${
					!inputState.isValid &&
					inputState.isTouched &&
					"border-red-400"
				}`}
			/>
		);

	return (
		<div className="mb-6">
			<div className="py-2">
				<label className="" htmlFor={props.id}>
					{props.label}
				</label>
				{element}
				{!inputState.isValid && inputState.isTouched && (
					<p className="text-red-500 text-xs text-right">
						{props.errorText}
					</p>
				)}
			</div>
		</div>
	);
};

export default Input;
