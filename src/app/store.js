import { configureStore } from '@reduxjs/toolkit'
import FormReducer from '../features/FormSlice'

export default configureStore({
	reducer: {
		Forms: FormReducer,
	},
})