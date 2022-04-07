// import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FragmentCreated } from '../../interfaces'
import axios from 'axios'

interface NewFragmentInfo {
    _id?: string
    userId?: string
    source: string
    excerpt: string
    coordinates: string
    title: string
    description: string

}

export const createFragment = createAsyncThunk(
    'fragment/createFragment',
    async (newFragmentInfo: FragmentCreated, thunkAPI) => {
        const { source, excerpt, coordinates, title, description, } = newFragmentInfo

        try {
            const state: any = thunkAPI.getState()
            const userInfo = state.user.userInfo
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const { data } = await axios.post(
                '/api/fragments/',
                {
                    source,
                    excerpt,
                    coordinates,
                    title,
                    description,
                },
                config
            )
            return data

        } catch (error: any) {
            return error
        }
    }
)

export const editSavedFragment = createAsyncThunk(
    'fragment/editSavedFragment',

    async (fragment: FragmentCreated, thunkAPI) => {

        try {
            const state: any = thunkAPI.getState()
            const userInfo = state.user.userInfo

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const { data } = await axios.put(
                `/api/fragments/${fragment._id}`,
                fragment,
                config
            )
            return data

        } catch (error: any) {
            return error
        }
    }
)

export const deleteSavedFragment = createAsyncThunk(
    'article/deleteFragment',
    async (id: string, thunkAPI) => {

        try {

            const state: any = thunkAPI.getState()
            const userInfo = state.user.userInfo

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const { data } = await axios.delete(
                `/api/fragments/${id}`,
                config
            )

            return data

        } catch (error: any) {

            return error
        }
    }
)

export const getUserFragments = createAsyncThunk(
    'article/getFragments',
    // x- below is nothing, just a temporary solution so thunkAPI is recognized as a parameter
    async (x: any, thunkAPI) => {

        const state: any = thunkAPI.getState()
        const userInfo = state.user.userInfo

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        try {
            const { data } = await axios.get(
                `/api/fragments/myfragments`, config
            )
            return data

        } catch (error: any) {
            return error
        }
    }
)

const fragmentSlice = createSlice({
    name: 'fragments',
    initialState: {

        citations: [
            {
                id: '1',
                source: '',
                excerpt: '',
                coordinates: '',
                title: '',
                description: ''
            }
        ],

        userFragments: [

        ],
        fragmentSaved: {},
        loading: false,
        error: {},
        success: false,
    },
    reducers: {

        citationAdded(state, action) {
            const { excerpt } = action.payload
            const existingCitation = state.citations.find(citation => citation.excerpt === excerpt)
            if (!existingCitation) { state.citations.push(action.payload) }

        },
        citationTitleEdit(state, action) {
            const { id, title } = action.payload
            const existingCitation = state.citations.find(citation => citation.id === id)
            if (existingCitation) {
                existingCitation.title = title
            }

        },
        citationDescriptionEdit(state, action) {
            const { id, description } = action.payload
            const existingCitation = state.citations.find(citation => citation.id === id)
            if (existingCitation) {
                existingCitation.description = description
            }

        },
        citationRemoved(state, action) {
            state.citations.length > 0 && (state.citations = state.citations.filter((citation) => citation.id !== action.payload))
        },


    },

    extraReducers: (builder) => {
        builder.addCase(createFragment.pending, (state, action) => {
            state.loading = true
            state.success = false
        })
        builder.addCase(createFragment.fulfilled, (state, action) => {
            state.loading = false
            state.fragmentSaved = action.payload
            state.error = action.payload.message
            state.success = true
        })
        builder.addCase(createFragment.rejected, (state, action) => {
            state.loading = false
        })

        builder.addCase(getUserFragments.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getUserFragments.fulfilled, (state, action) => {
            state.loading = false
            state.userFragments = action.payload
            state.error = action.payload.message
        })
        builder.addCase(getUserFragments.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(deleteSavedFragment.pending, (state, action) => {
            state.loading = true
            state.success = false

        })
        builder.addCase(deleteSavedFragment.fulfilled, (state, action) => {
            state.loading = false
            state.error = action.payload.message
            state.success = true
        })
        builder.addCase(deleteSavedFragment.rejected, (state, action) => {
            state.loading = false

        })
        builder.addCase(editSavedFragment.pending, (state, action) => {
            state.loading = true
            state.success = false
        })
        builder.addCase(editSavedFragment.fulfilled, (state, action) => {
            state.loading = false
            state.error = action.payload.message
            state.success = true
        })
        builder.addCase(editSavedFragment.rejected, (state, action) => {
            state.loading = false

        })
    },

})



export const { citationAdded, citationRemoved, citationTitleEdit, citationDescriptionEdit } = fragmentSlice.actions

export default fragmentSlice.reducer