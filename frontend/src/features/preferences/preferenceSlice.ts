import { createSlice } from "@reduxjs/toolkit"

const today = new Date()

const preferenceSlice = createSlice({
    name: 'settings',
    initialState: {

        width: '700px',
        widthNarrow: '70%',
        sortingDate: { sortingYear: today.getFullYear(), sortingMonth: today.getMonth() + 1, sortingDay: today.getDate() },
        sortingKeywords: {
            keywordMain: '',
            keywordOne: '',
            keywordTwo: ''
        },
        sortingOption: 'date',
        showFragments: true


    },
    reducers: {

        showFragments(state, action) {
            state.showFragments = action.payload
        },
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
        sortingKeywordMainEdit(state, action) {

            state.sortingKeywords.keywordMain = action.payload
        },
        sortingOptionEdit(state, action) {

            state.sortingOption = action.payload
        },




    },


})



export const { showFragments, preferredWidthSaved, preferredNarrowWidthSaved, sortingDateEdit, sortingKeywordsEdit, sortingKeywordMainEdit, sortingOptionEdit } = preferenceSlice.actions

export default preferenceSlice.reducer