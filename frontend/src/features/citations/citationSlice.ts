import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CitationCreated } from '../../interfaces'
import axios from 'axios'

// interface NewCitationInfo {
//     _id?: string
// }

const citationSlice = createSlice({
    name: 'citation',
    initialState: {
        citations: [
            // userId: '',
            // fragments: [

            // ],
        ],
        loading: false,
        error: {},
        success: false,
    },
    reducers: {
        // saveFragment(state, action: PayloadAction<FragmentCreated>) {
        saveFragment(state, action) {
            state.citations = action.payload
        },
        deleteFragment(state, action) {
            // state.fragments = []
        },
        deleteAllFragments(state, action) {
            state.citations = []
        },


    },

    extraReducers: (builder) => {
    },

})


// export const { } = fragmentSlice.actions
export const { saveCitation, deleteCitation, deleteAllCitations } = citationSlice.actions

export default citationSlice.reducer