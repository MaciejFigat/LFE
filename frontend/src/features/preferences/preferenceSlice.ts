import { createSlice } from "@reduxjs/toolkit"
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// import { FragmentCreated } from '../../interfaces'
// import axios from 'axios'



const preferenceSlice = createSlice({
    name: 'settings',
    initialState: {

        width: '',

    },
    reducers: {

        preferredWidthSaved(state, action) {
            // const { width } = action.payload
            // state.width = width
            state.width = action.payload
        },




    },


})



export const { preferredWidthSaved } = preferenceSlice.actions

export default preferenceSlice.reducer