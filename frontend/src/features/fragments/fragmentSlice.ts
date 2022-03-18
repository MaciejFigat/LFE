import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FragmentCreated } from '../../interfaces'
import axios from 'axios'

interface NewFragmentInfo {
    _id?: string
    topline: string
    headline: string
    subtitle: string


}





const fragmentSlice = createSlice({
    name: 'fragment',
    initialState: {
        fragments: [],
        fragmentInfo: {},
        fragmentById: {
            _id: '',
            createdAt: '',
        },

        lastFragmentCreated: {},
        loading: false,
        error: {},
        success: false,
    },
    reducers: {
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