import { createSlice } from '@reduxjs/toolkit'

export const FormSlice = createSlice({
	name: 'form',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state, action) => {
			state.value += action.payload
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = FormSlice.actions

export default FormSlice.reducer