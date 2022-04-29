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



    },
    reducers: {

        preferredWidthSaved(state, action) {
            // const { width } = action.payload
            // state.width = width
            state.width = action.payload
        },
        sortingDateEdit(state, action) {
            // const { width } = action.payload
            // state.width = width
            state.sortingDate = action.payload
        },




    },


})



export const { preferredWidthSaved, sortingDateEdit } = preferenceSlice.actions

export default preferenceSlice.reducer