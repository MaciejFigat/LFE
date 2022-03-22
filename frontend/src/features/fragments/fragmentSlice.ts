import { createSlice } from "@reduxjs/toolkit"
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { CitationCreated } from '../../interfaces'
// import axios from 'axios'

// interface NewCitationInfo {
//     _id?: string
// }

const fragmentSlice = createSlice({
    name: 'fragment',
    initialState: {
        fragments: [
            {
                id: '',
                userId: '',
                citations: [
                    {
                        source: '',
                        excerpt: '',
                        coordinates: ''
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
            state.fragments.push(action.payload)
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
            state.fragments = action.payload
        },
        deleteFragment(state, action) {
            // state.fragments = []
        },
        deleteAllFragments(state, action) {
            state.fragments = []
        },


    },

    extraReducers: (builder) => {
    },

})


// export const { } = fragmentSlice.actions
export const { saveFragment, deleteFragment, deleteAllFragments } = fragmentSlice.actions

export default fragmentSlice.reducer