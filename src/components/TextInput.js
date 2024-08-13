import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput, incrementErrors } from "../redux/inputSlice";
import { incrementCorrectChars, incrementTotalChars } from "../redux/textSlice";
import { selectText, selectUserInput } from "../redux/selector";

import styles from '../styles/TextInput.module.scss';

const TextInput = ({ handleCompletion }) => {
	const dispatch = useDispatch();
	const text = useSelector(selectText);
	const userInput = useSelector(selectUserInput);

	useEffect(() => {
		if (userInput.length === text.length) {
			handleCompletion();
		}
	}, [userInput, text, handleCompletion]);

	const handleInputChange = useCallback((e) => {
		const value = e.target.value;
		if (value.length <= text.length) {
			dispatch(setUserInput(value));
			dispatch(incrementTotalChars());

			if (value[value.length - 1] === text[value.length - 1]) {
				dispatch(incrementCorrectChars());
			} else {
				dispatch(incrementErrors());
			}
		}
	}, [dispatch, text]);

	return (
		<input
			type="text"
			className={styles.textInput}
			value={userInput}
			onChange={handleInputChange}
			autoFocus
		/>
	);
};

export default TextInput;