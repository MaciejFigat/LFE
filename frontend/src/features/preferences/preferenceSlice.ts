import { createSlice } from "@reduxjs/toolkit"
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// import { FragmentCreated } from '../../interfaces'
// import axios from 'axios'



const preferenceSlice = createSlice({
    name: 'fragments',
    initialState: {

        preferences: [
            {
                width: '',

            }
        ],


        loading: false,
        error: {},
        success: false,
    },
    reducers: {

        // citationAdded(state, action) {
        //     const { excerpt } = action.payload
        //     const existingCitation = state.citations.find(citation => citation.excerpt === excerpt)
        //     if (!existingCitation) { state.citations.push(action.payload) }

        // },
        // citationTitleEdit(state, action) {
        //     const { id, title } = action.payload
        //     const existingCitation = state.citations.find(citation => citation.id === id)
        //     if (existingCitation) {
        //         existingCitation.title = title
        //     }

        // },
        // citationDescriptionEdit(state, action) {
        //     const { id, description } = action.payload
        //     const existingCitation = state.citations.find(citation => citation.id === id)
        //     if (existingCitation) {
        //         existingCitation.description = description
        //     }

        // },
        // citationRemoved(state, action) {
        //     state.citations.length > 0 && (state.citations = state.citations.filter((citation) => citation.id !== action.payload))
        // },


    },

    extraReducers: (builder) => {

    },

})



export const { } = preferenceSlice.actions

export default preferenceSlice.reducer