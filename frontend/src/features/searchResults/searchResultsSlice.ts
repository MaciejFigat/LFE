import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const getSearchResultsTwo = createAsyncThunk(
  'searchResultsTwo/getSearchResults',

  async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
    try {
      const { data } = await axios.get(`/lexapi`, config)

      return data
    } catch (error: any) {
      return error
    }
  }
)

export const getSearchResults = createAsyncThunk(
  'searchResults/getSearchResults',

  async (searchquery: string) => {
    try {
      const { data } = await axios.get(`/lexapi/search`, {
        params: { searchquery: searchquery }
      })

      //todo
      // console.log(JSON.stringify(data, null, 4))
      return data
    } catch (error: any) {
      return error
    }
  }
)
interface DocQuery {
  query: string
  selectedDoc: number
  docNumber: number
}
export const getDocResult = createAsyncThunk(
  'docResult/getDocResult',

  async (searchquery: DocQuery) => {
    const { query, selectedDoc, docNumber } = searchquery
    try {
      const { data } = await axios.get(`/lexapi/doc`, {
        params: {
          query: query,
          selectedDoc: selectedDoc,
          docNumber: docNumber
        }
      })

      //todo
      // console.log(JSON.stringify(data, null, 4))
      return data
    } catch (error: any) {
      return error
    }
  }
)
//? thunk for id and query link
interface DocIdQuery {
  query: string
  docNumber: number
}
export const getDocByIdAndQuery = createAsyncThunk(
  'docResult/getDocByIdAndQuery',

  async (searchquery: DocIdQuery) => {
    const { query, docNumber } = searchquery
    try {
      const { data } = await axios.get(`/lexapi/doc/id/query`, {
        params: {
          query: query,
          docNumber: docNumber
        }
      })

      return data
    } catch (error: any) {
      return error
    }
  }
)
// /lexapi/doc/id/query
// ! Work in progress /searchSkip
interface ResultQuery {
  query: string
  skip: number
  take: number
  start_date: number
  end_date: number
}
export const getResultsFiltered = createAsyncThunk(
  'docResult/getResultsFiltered',

  async (searchquery: ResultQuery) => {
    const { query, skip, take, start_date, end_date } = searchquery

    try {
      const { data } = await axios.get(`/lexapi/searchSkip`, {
        params: {
          query: query,
          skip: skip,
          take: take,
          start_date: start_date,
          end_date: end_date
        }
      })

      //todo
      console.log(JSON.stringify(data, null, 4))
      return data
    } catch (error: any) {
      return error
    }
  }
)
//! Work in progress /searchSkip
export const getDocByNr = createAsyncThunk(
  'docResult/getDocByNr',

  async (nr: number) => {
    try {
      const { data } = await axios.get(`/lexapi/doc/nr`, { params: { nr: nr } })

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
      data: []
    },
    docResult: {
      data: []
    },

    heroDocIndex: 0,
    docId: 0,
    visitedLinks: [{ test: true, doc_link: 0 }],

    loading: false,
    loadingDoc: false,

    error: {},
    success: false
  },
  reducers: {
    changeHeroDocIndex: (state, action) => {
      state.heroDocIndex = action.payload
    },
    changeDocId: (state, action) => {
      state.docId = action.payload
    },
    addHeroDocIndex: state => {
      state.heroDocIndex = state.heroDocIndex + 1
    },
    subtractHeroDocIndex: state => {
      if (state.heroDocIndex > 0) state.heroDocIndex = state.heroDocIndex - 1
    },
    addVisitedLink: (state, action) => {
      const { doc_link } = action.payload
      const existingLink = state.visitedLinks.find(
        visitedLinks => visitedLinks.doc_link === doc_link
      )

      if (
        !existingLink &&
        state.visitedLinks &&
        state.visitedLinks.length < 10
      ) {
        state.visitedLinks.push(action.payload)
      } else if (
        !existingLink &&
        state.visitedLinks &&
        state.visitedLinks.length >= 10
      ) {
        // unshift() adds element to the beginnig of an array
        state.visitedLinks.unshift(action.payload)
        // .pop() removes last element of an array
        state.visitedLinks.pop()
      }
    }
  },

  extraReducers: builder => {
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
    builder.addCase(getResultsFiltered.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getResultsFiltered.fulfilled, (state, action) => {
      state.loading = false
      state.searchResults = action.payload
    })
    builder.addCase(getResultsFiltered.rejected, (state, action) => {
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
    builder.addCase(getDocByIdAndQuery.pending, state => {
      state.loadingDoc = true
    })
    builder.addCase(getDocByIdAndQuery.fulfilled, (state, action) => {
      state.loadingDoc = false
      state.docResult = action.payload
    })
    builder.addCase(getDocByIdAndQuery.rejected, (state, action) => {
      state.loadingDoc = false
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
  }
})

export const {
  addVisitedLink,
  changeHeroDocIndex,
  subtractHeroDocIndex,
  addHeroDocIndex,
  changeDocId
} = searchResultSlice.actions
export default searchResultSlice.reducer
