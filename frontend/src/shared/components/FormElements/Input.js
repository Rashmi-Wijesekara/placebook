import React, { useReducer, useEffect } from "react";
import {validate} from "../../utils/validators"

const inputReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.val,
				isValid: validate(action.val, action.validators)
			};
		case "TOUCH":
			return {
				...state,
				isTouched: true
			}
		default:
			return state;
	}
};

const Input = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: "",
		isValid: false,
		isTouched: false
	});

	const {id, onInput} = props;
	const {value, isValid} = inputState;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	const changeHandler = (event) => {
		dispatch({
			type: 'CHANGE',
			val: event.target.value,
			validators: props.validators
		})
	}

	const touchHandler = (event) => {
		dispatch({
			type: 'TOUCH'
		})
	}

	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
				className={`border-2 border-slate-200 mx-5 px-2 py-1 rounded-xl ${
					inputState.isTouched && 'bg-red-200 border-red-400'
				}`}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
				className="border-2 border-slate-200 rounded-xl font-medium"
			/>
		);

	return (
		<div
			className={`shadow-lg w-fit  rounded-xl px-10 py-12 mx-auto my-5 font-mono font-semibold`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
			{!inputState.isValid && inputState.isTouched && <p className="text-red-500 text-xs text-right my-2">{props.errorText}</p>}
		</div>
	);
};

export default Input;
