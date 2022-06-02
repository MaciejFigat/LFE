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

            console.log(data)

            console.log(JSON.stringify(data, null, 4))
            return data
        } catch (error: any) {
            return error
        }
    })

export const getSearchResults = createAsyncThunk(
    'searchResults/getSearchResults',

    async (searchquery: string) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',

            },
            // searchquery: searchquery
        }
        try {
            // let searchquery = 'testTest'
            const { data } = await axios.get(
                // `/lexapi/search/?query=${searchquery}`, config
                // `/lexapi/search`, { params: { searchquery: searchquery }, }
                `/lexapi/search`, { params: { searchquery: searchquery } }
                // config,
                // searchquery
            )

            // console.log(data)
            // console.log('jestem')
            //todo
            console.log(JSON.stringify(data, null, 4))
            return data
        } catch (error: any) {
            return error
        }
    }
)
// async () => {

//     try {
//         // 👇️ const data: GetUsersResponse
//         const { data, status } = await axios.get('/lexapi/', {
//             headers: {
//                 Accept: 'application/json',
//             },
//         })

//         console.log(JSON.stringify(data, null, 4))

//         // 👇️ "response status is: 200"
//         console.log('response status is: ', status)
//         console.log(data)

//         return data
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message)
//             return error.message
//         } else {
//             console.log('unexpected error: ', error)
//             return 'An unexpected error occurred'
//         }
//     }

// }



const searchResultSlice = createSlice({
    name: 'fragments',
    initialState: {

        searchResults: [

        ],

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