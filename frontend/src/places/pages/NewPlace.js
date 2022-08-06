import React, { useCallback } from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/utils/validators";

const NewPlace = () => {
	const titleInputHandler = useCallback(
		(id, value, isValid) => {},
		[] // this will run only at the beginning
	);

	const descriptionInputHandler = useCallback(
		(id, value, isValid) => {},
		[]
	);

	return (
		<form className="">
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				errorText="Please enter a valid title"
				validators={[VALIDATOR_REQUIRE()]}
				onInput={titleInputHandler}
			/>

			<Input
				id="description"
				element="textarea"
				label="Description"
				errorText="Please enter a valid description (at least 5 characters)"
				validators={[VALIDATOR_MINLENGTH(5)]}
				onInput={descriptionInputHandler}
			/>
		</form>
	);
};

export default NewPlace;
