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
        showFragments: true,
        searchResultsPage: { start: 0, end: 9, pageNr: 1 },
        savedFragmentsPage: { start: 0, end: 9, pageNr: 1 },
        highlightQuery: '',


    },
    reducers: {

        showFragments(state, action) {
            state.showFragments = action.payload
        },
        preferredWidthSaved(state, action) {

            state.width = action.payload
        },
        searchResultsPageSaved(state, action) {
            state.searchResultsPage = action.payload
        },
        fragmentsPageSaved(state, action) {
            state.savedFragmentsPage = action.payload
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
        highlightQueryEdit(state, action) {
            state.highlightQuery = action.payload
        },




    },


})



export const { showFragments, preferredWidthSaved, searchResultsPageSaved, fragmentsPageSaved, preferredNarrowWidthSaved, sortingDateEdit, sortingKeywordsEdit, sortingKeywordMainEdit, sortingOptionEdit, highlightQueryEdit } = preferenceSlice.actions

export default preferenceSlice.reducer