import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userInput: '',
	errors: 0,
};

const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		setUserInput: (state, action) => {
			state.userInput = action.payload;
		},
		incrementErrors: (state) => {
			state.errors += 1;
		},
		resetInput: (state) => {
			state.userInput = '';
			state.errors = 0;
		},
	},
});

export const { setUserInput, incrementErrors, resetInput } = inputSlice.actions;
export default inputSlice.reducer;