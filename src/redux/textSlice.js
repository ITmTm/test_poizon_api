import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	text: 'This is a simple text for typing speed test.',
	correctChars: 0,
	totalChars: 0
};

const textSlice = createSlice({
	name: 'text',
	initialState,
	reducers: {
		incrementCorrectChars: (state) => {
			state.correctChars += 1;
		},
		incrementTotalChars: (state) => {
			state.totalChars += 1;
		},
		resetStats: (state) => {
			state.correctChars = 0;
			state.totalChars = 0;
		},
	},
});

export const { incrementCorrectChars, incrementTotalChars, resetStats } = textSlice.actions;
export default textSlice.reducer;