import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FragmentCreated, FragmentStored } from '../../interfaces'
import { nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

// const { source, excerpt, coordinates, title, description, keywords, keywordValue } = newFragmentInfo
export const createFragment = createAsyncThunk(
  'fragment/createFragment',
  async (newFragmentInfo: FragmentCreated, thunkAPI) => {
    const {
      source,
      excerpt,
      coordinates,
      title,
      description,
      docId,
      query,
      keywords,
      keywordValue
    } = newFragmentInfo

    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.post(
        '/api/fragments/',
        {
          source,
          excerpt,
          coordinates,
          title,
          description,
          query,
          docId,
          keywords: keywords,
          keywordValue: keywordValue
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
          Authorization: `Bearer ${userInfo.token}`
        }
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
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.delete(`/api/fragments/${id}`, config)

      return data
    } catch (error: any) {
      return error
    }
  }
)

export const getUserFragments = createAsyncThunk(
  'fragment/getFragments',
  // x- below is a placeholder
  async (x: any, thunkAPI) => {
    const state: any = thunkAPI.getState()
    const userInfo = state.user.userInfo
    const lastUpdated = state.fragment.lastUpdated

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    // Only make a new request if more than 10 seconds have passed
    const tenSeconds = 10000 // in milliseconds
    if (Date.now() - lastUpdated > tenSeconds) {
      try {
        const { data } = await axios.get(`/api/fragments/myfragments`, config)
        return { data, time: Date.now() }
      } catch (error: any) {
        return error
      }
    } else {
      return thunkAPI.rejectWithValue('Not enough time has passed')
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

    userFragments: [],
    fragmentsKeywordMain: [],
    fragmentsKeywordOne: [],
    fragmentsKeywordTwo: [],
    fragmentSaved: {
      excerpt: ''
    },
    loading: false,
    loadingUpdate: false,
    error: {},
    success: false,
    successUpdate: false,
    lastUpdated: 0
  },
  reducers: {
    citationAdded (state, action) {
      const { excerpt } = action.payload
      const existingCitation = state.citations.find(
        citation => citation.excerpt === excerpt
      )
      if (!existingCitation) {
        state.citations.push(action.payload)
      }
    },
    citationTitleEdit (state, action) {
      const { id, title } = action.payload
      const existingCitation = state.citations.find(
        citation => citation.id === id
      )
      if (existingCitation) {
        existingCitation.title = title
      }
    },
    citationDescriptionEdit (state, action) {
      const { id, description } = action.payload
      const existingCitation = state.citations.find(
        citation => citation.id === id
      )
      if (existingCitation) {
        existingCitation.description = description
      }
    },
    citationRemoved (state, action) {
      state.citations.length > 0 &&
        (state.citations = state.citations.filter(
          citation => citation.id !== action.payload
        ))
    },
    updateUserFragmentsKeywordMain (state, action) {
      state.fragmentsKeywordMain = action.payload
    },
    updateUserFragmentsKeywordOne (state, action) {
      state.fragmentsKeywordOne = action.payload
    },
    updateUserFragmentsKeywordTwo (state, action) {
      state.fragmentsKeywordTwo = action.payload
    },
    resetUserFragments (state) {
      state.userFragments = []
    }
  },

  extraReducers: builder => {
    builder.addCase(createFragment.pending, (state, action) => {
      state.loading = true
      state.success = false
    })
    builder.addCase(createFragment.fulfilled, (state, action) => {
      state.loading = false
      state.fragmentSaved = action.payload
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
      state.lastUpdated = action.payload.time
      if (action.payload.data?.length > 0) {
        state.userFragments = action.payload!.data.map(
          (el: FragmentStored) => ({
            ...el,
            nanoId: nanoid()
          })
        )
      }

      state.success = true
      // ? setting successUpdate = false so after I fetch the fragments after updating data I won't activate getUserFragments for every subsequent render
      state.successUpdate = false
    })
    builder.addCase(getUserFragments.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(deleteSavedFragment.pending, (state, action) => {
      state.loadingUpdate = true
      state.successUpdate = false
    })
    builder.addCase(deleteSavedFragment.fulfilled, (state, action) => {
      state.loadingUpdate = false
      state.error = action.payload.message
      state.successUpdate = true
    })
    builder.addCase(deleteSavedFragment.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(editSavedFragment.pending, (state, action) => {
      state.loadingUpdate = true
      state.successUpdate = false
    })
    builder.addCase(editSavedFragment.fulfilled, (state, action) => {
      state.loadingUpdate = false
      state.error = action.payload.message
      state.successUpdate = true
    })
    builder.addCase(editSavedFragment.rejected, (state, action) => {
      state.loadingUpdate = false
    })
  }
})

export const {
  citationAdded,
  citationRemoved,
  citationTitleEdit,
  citationDescriptionEdit,
  updateUserFragmentsKeywordMain,
  updateUserFragmentsKeywordOne,
  updateUserFragmentsKeywordTwo,
  resetUserFragments
} = fragmentSlice.actions

export default fragmentSlice.reducer
