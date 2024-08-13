import React from "react";
import { useSelector } from "react-redux";
import { selectUserInput, selectText, selectErrors } from "../redux/selector";

import styles from '../styles/ProgressBar.module.scss';

const ProgressBar = () => {
	const userInput = useSelector(selectUserInput);
	const text = useSelector(selectText);
	const errors = useSelector(selectErrors);

	const progress = (userInput.length / text.length) * 100;
	const errorPercentage = (errors / text.length) * 100;

	return (
		<div className={styles.progressBarContainer}>
			<div className={styles.progressBar}>
				<div className={styles.correctProgress} style={{ width: `${progress}%` }} />
				<div className={styles.errorProgress} style={{ width: `${errorPercentage}%` }} />
			</div>
		</div>
	);
};

export default ProgressBar;