import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';
import Results from './components/Results';
import { resetStats } from "./redux/textSlice";
import { resetInput } from "./redux/inputSlice";

import './styles/App.scss';

const App = () => {
	const dispatch = useDispatch();
	const userInput = useSelector((state) => state.input.userInput);
	const text = useSelector((state) => state.text.text);

	const [isCompleted, setIsCompleted] = useState(false);

	const handleCompletion = () => {
		if (userInput.length === text.length) {
			setIsCompleted(true);
		}
	};

	const handleRestart = () => {
		dispatch(resetStats());
		dispatch(resetInput());
		setIsCompleted(false);
	}

	return (
		<div className='app'>
			<h1>Typing Speed Trainer</h1>
			{!isCompleted ? (
				<>
					<TextDisplay />
					<TextInput handleCompletion={handleCompletion} />
				</>
			) : (
				<Results handleRestart={handleRestart} />
			)}
		</div>
	);
};

export default App;