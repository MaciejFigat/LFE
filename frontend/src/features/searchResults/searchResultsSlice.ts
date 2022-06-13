import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { nanoid } from '@reduxjs/toolkit'
import axios from 'axios'


export const getSearchResultsTwo = createAsyncThunk(
    'searchResultsTwo/getSearchResults',

    async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        try {
            const { data } = await axios.get(
                `/lexapi`, config
            )

            // console.log(data)

            // console.log(JSON.stringify(data, null, 4))
            return data
        } catch (error: any) {
            return error
        }
    })

export const getSearchResults = createAsyncThunk(
    'searchResults/getSearchResults',

    async (searchquery: string) => {

        try {

            const { data } = await axios.get(

                `/lexapi/search`, { params: { searchquery: searchquery } }

            )


            //todo
            // console.log(JSON.stringify(data, null, 4))
            return data
        } catch (error: any) {
            return error
        }
    }
)
interface DocQuery {
    query: string, selectedDoc: number, docNumber: number
    // query: string, selectedDoc: number, docNumber: number
}
export const getDocResult = createAsyncThunk(
    'docResult/getDocResult',

    async (searchquery: DocQuery) => {

        const { query, selectedDoc, docNumber } = searchquery
        try {

            const { data } = await axios.get(
                `/lexapi/doc`, {
                params: {
                    query: query,
                    selectedDoc: selectedDoc,
                    docNumber: docNumber
                },
            }



            )

            //todo
            // console.log(JSON.stringify(data, null, 4))
            return data
        } catch (error: any) {
            return error
        }
    }
)
export const getDocByNr = createAsyncThunk(
    'docResult/getDocByNr',

    async (nr: number) => {

        try {

            const { data } = await axios.get(
                // `/lexapi/doc/`, { params: { nr: nr } }
                // `/lexapi/doc/${id}`, { params: { nr: id } }
                `/lexapi/doc/nr`, { params: { nr: nr } }
            )

            return data
        } catch (error: any) {
            return error
        }
    }
)


const searchResultSlice = createSlice({
    name: 'fragments',
    initialState: {

        searchResults: {
            data: [],
        },
        docResult: {
            data: [],
        },



        loading: false,

        error: {},
        success: false,

    },
    reducers: {




    },

    extraReducers: (builder) => {


        builder.addCase(getSearchResults.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getSearchResults.fulfilled, (state, action) => {
            state.loading = false
            // state.userFragments = action.payload
            // if action.payload {state.searchResults = action.payload} 
            state.searchResults = action.payload
            // state.searchResults = action.payload.map((el: any) => ({ ...el, nanoId: nanoid() }))

            // state.error = action.payload.message
        })
        builder.addCase(getSearchResults.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getDocResult.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getDocResult.fulfilled, (state, action) => {
            state.loading = false
            state.docResult = action.payload

        })
        builder.addCase(getDocResult.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getDocByNr.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getDocByNr.fulfilled, (state, action) => {
            state.loading = false
            state.docResult = action.payload

        })
        builder.addCase(getDocByNr.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getSearchResultsTwo.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getSearchResultsTwo.fulfilled, (state, action) => {
            state.loading = false
            // state.userFragments = action.payload
            // if action.payload {state.searchResults = action.payload} 
            state.searchResults = action.payload
            // state.searchResults = action.payload.map((el: any) => ({ ...el, nanoId: nanoid() }))

            // state.error = action.payload.message
        })
        builder.addCase(getSearchResultsTwo.rejected, (state, action) => {
            state.loading = false
        })

    },

})



// export const {  } = fragmentSlice.actions

export default searchResultSlice.reducer