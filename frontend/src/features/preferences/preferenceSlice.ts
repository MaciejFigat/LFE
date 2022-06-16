import { createSlice } from "@reduxjs/toolkit"

const today = new Date()

const preferenceSlice = createSlice({
    name: 'settings',
    initialState: {

        width: '700px',
        widthNarrow: '300px',
        sortingDate: { sortingYear: today.getFullYear(), sortingMonth: today.getMonth() + 1, sortingDay: today.getDate() },
        sortingKeywords: {
            keywordOne: '',
            keywordTwo: ''
        },
        sortingOption: 'date'


    },
    reducers: {

        preferredWidthSaved(state, action) {
            // const { width } = action.payload
            // state.width = width
            state.width = action.payload
        },
        preferredNarrowWidthSaved(state, action) {
            state.widthNarrow = action.payload
        },
        sortingDateEdit(state, action) {

            state.sortingDate = action.payload
        },
        sortingKeywordsEdit(state, action) {

            state.sortingKeywords = action.payload
        },
        sortingOptionEdit(state, action) {

            state.sortingOption = action.payload
        },




    },


})



export const { preferredWidthSaved, preferredNarrowWidthSaved, sortingDateEdit, sortingKeywordsEdit, sortingOptionEdit } = preferenceSlice.actions

export default preferenceSlice.reducer