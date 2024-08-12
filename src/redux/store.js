import { configureStore } from '@reduxjs/toolkit';
import textReducer from './textSlice';
import inputReducer from './inputSlice';

const store = configureStore({
	reducer: {
		text: textReducer,
		input: inputReducer,
	},
});

export default store;