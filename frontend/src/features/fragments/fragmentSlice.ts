import { createSlice } from "@reduxjs/toolkit"
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { CitationCreated } from '../../interfaces'
// import axios from 'axios'

// interface NewCitationInfo {
//     _id?: string
// }

const fragmentSlice = createSlice({
    name: 'fragments',
    initialState: {

        citations: [
            {
                id: '1',
                source: '',
                excerpt: '',
                coordinates: '',
                title: ''
            }
        ],

        userFragments: [
            {
                id: '',
                userId: '',
                citations: [
                    {
                        source: '',
                        excerpt: '',
                        coordinates: '',
                        title: ''
                    }
                ],
            }
        ],
        loading: false,
        error: {},
        success: false,
    },
    reducers: {
        fragmentAdded(state, action) {
            state.userFragments.push(action.payload)
        },
        citationAdded(state, action) {
            const { excerpt } = action.payload

            const existingCitation = state.citations.find(citation => citation.excerpt === excerpt)
            // (state.citations.find((citation) => citation.id !== action.payload)) && (state.citations.find((citation) => citation.excerpt !== action.payload)) && 
            if (!existingCitation) { state.citations.push(action.payload) }

        },
        citationTitleEdit(state, action) {

            const { id, excerpt, source, title } = action.payload
            const existingCitation = state.citations.find(citation => citation.id === id)
            if (existingCitation) {
                existingCitation.excerpt = excerpt
                existingCitation.source = source
                existingCitation.title = title
            }

        },
        citationRemoved(state, action) {
            state.citations.length > 0 && (state.citations = state.citations.filter((citation) => citation.id !== action.payload))
        },
        fragmentUpdated(state, action) {
            // const { id, title, content } = action.payload
            // const existingFragment = state.find(post => post.id === id)
            // if (existingFragment) {
            //     existingFragment.title = title
            //     existingFragment.content = content
            // }
        },
        // saveFragment(state, action: PayloadAction<FragmentCreated>) {
        saveFragment(state, action) {
            state.userFragments = action.payload
        },
        deleteFragment(state, action) {
            // state.fragments = []
        },
        deleteAllFragments(state, action) {
            state.userFragments = []
        },


    },

    extraReducers: (builder) => {
    },

})



export const { citationAdded, citationRemoved, fragmentAdded, saveFragment, deleteFragment, deleteAllFragments } = fragmentSlice.actions

export default fragmentSlice.reducer