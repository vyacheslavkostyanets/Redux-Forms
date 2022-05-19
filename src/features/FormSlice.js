import { createSlice } from '@reduxjs/toolkit'

export const FormSlice = createSlice({
	name: 'form',
	initialState: {
		value: [{
			Company: "Company",
			Name: "Name",
			Additional: "Additional",
			Street: "Street",
			PostalCode: "PostalCode",
			City: "Ukraine",
			Iban: "Iban",
			Bic: "BicBic",
			BlankName: "BlankName",
			Fax: "FaxFax",
			Email: "Email",
			Homepage: "Homepage",
			Birthday: "Birthday"
		}],
	},
	reducers: {
		addFormData: (state, action) => {
			console.log('action.payload', action.payload)
			state.value.push(action.payload)
		},
		deleteData: (state, id) => {
			state.value = state.value.filter((el, i) => {
				console.log(i, id.payload, "i, id.payload")
				return i !== id.payload
			})
		}
	},
})

// Action creators are generated for each case reducer function
export const { addFormData, deleteData } = FormSlice.actions

export default FormSlice.reducer