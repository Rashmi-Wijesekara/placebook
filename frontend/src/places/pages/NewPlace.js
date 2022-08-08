import React, { useCallback, useReducer } from "react";
import Input from "../../shared/components/FormElements/Input";
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";

const formReducer = (state, action) => {
	switch (action.type) {
		case "INPUT_CHANGE":
			let formIsValid = true;

			for (const inputId in state.inputs) {
				if (inputId === action.inputId) {
					formIsValid = formIsValid && action.isValid;
					// if action.isValid === false, formIsValid will become false too
				} else {
					formIsValid =
						formIsValid && state.inputs[inputId].isValid;
				}
			}
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.inputId]: {
						value: action.value,
						isValid: action.isValid,
					},
					isValid: formIsValid,
				},
			};
		default:
			return state;
	}
};

const NewPlace = () => {
	const form__initialState = {
		inputs: {
			title: {
				value: "",
				isValid: false,
			},
			description: {
				value: "",
				isValid: false,
			},
		},
		isValid: false,
	};

	const [formState, dispatch] = useReducer(
		formReducer,
		form__initialState
	);

	const inputHandler = useCallback(
		(id, value, isValid) => {
			dispatch({
				type: "INPUT_CHANGE",
				value: value,
				isValid: isValid,
				inputId: id,
			});
		},
		[] // this will run only at the beginning
	);

	const formSubmitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<form
			className={`shadow-lg rounded-xl px-10 py-12 mx-auto max-w-lg font-mono font-semibold`}
		>
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				errorText="Please enter a valid title"
				validators={[VALIDATOR_REQUIRE()]}
				onInput={inputHandler}
			/>

			<Input
				id="description"
				element="textarea"
				label="Description"
				errorText="Please enter a valid description (at least 5 characters)"
				validators={[VALIDATOR_MINLENGTH(5)]}
				onInput={inputHandler}
			/>

			<button
				onClick={formSubmitHandler}
				className={`text-white font-semibold text-lg bg-amber-400 px-5 py-2 rounded-xl my-3 hover:shadow-xl hover:scale-95 active:translate-y-2 transform duration:300`}
				disabled={!formState.isValid}
			>
				Add Place
			</button>
		</form>
	);
};

export default NewPlace;
