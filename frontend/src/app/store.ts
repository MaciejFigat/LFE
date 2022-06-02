import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'
import fragmentReducer from '../features/fragments/fragmentSlice'
import preferenceReducer from '../features/preferences/preferenceSlice'
import searchResultReducer from '../features/searchResults/searchResultsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
  reducer: {
    user: userReducer,
    fragment: fragmentReducer,
    preference: preferenceReducer,
    searchResult: searchResultReducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })

  },
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

