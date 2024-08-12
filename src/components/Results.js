import React from "react";
import { useSelector } from "react-redux";

import styles from '../styles/Results.module.scss';

const Results = ({ handleRestart }) => {
	const correctChars = useSelector((state) => state.text.correctChars);
	const errors = useSelector((state) => state.input.errors);

	const calculateWPM = () => {
		const wordsTyped = correctChars / 5;  // Среднее кол-во символов в слове
		return (wordsTyped).toFixed(2);
	};


	return (
		<div className={styles.results}>
			<h2>Результаты:</h2>
			<p>Скорость печати: {calculateWPM()} WPM</p>
			<p>Ошибки: {errors}</p>
			<button
				className={styles.restartButton}
				onClick={handleRestart}
			>
				Начать заново
			</button>
		</div>
	);
};

export default Results;