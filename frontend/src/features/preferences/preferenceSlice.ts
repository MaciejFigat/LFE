import { createSlice } from "@reduxjs/toolkit"
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// import { FragmentCreated } from '../../interfaces'
// import axios from 'axios'

const today = new Date()

const preferenceSlice = createSlice({
    name: 'settings',
    initialState: {

        width: '',
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



export const { preferredWidthSaved, sortingDateEdit, sortingKeywordsEdit, sortingOptionEdit } = preferenceSlice.actions

export default preferenceSlice.reducer