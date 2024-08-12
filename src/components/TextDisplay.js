import React from "react";
import { useSelector } from "react-redux";

import styles from '../styles/TextDisplay.module.scss';

const TextDisplay = () => {
	const text = useSelector((state) => state.text.text);
	const userInput = useSelector((state) => state.input.userInput);

	const getCharClass = (char, index) => {
		if (index < userInput.length) {
			return char === userInput[index] ? styles.correct : styles.incorrect;
		}
		return '';
	};

	return (
		<div className={styles.textDisplay}>
			{text.split('').map((char, index) => (
				<span
					key={index}
					className={getCharClass(char, index)}
				>
					{char}
				</span>
			))}
		</div>
	);
};

export default TextDisplay;