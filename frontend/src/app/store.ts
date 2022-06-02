import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'
import fragmentReducer from '../features/fragments/fragmentSlice'
import preferenceReducer from '../features/preferences/preferenceSlice'
import searchResultReducer from '../features/searchResults/searchResultsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
// import { lexApi } from '../features/lexApi/lexApiSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    fragment: fragmentReducer,
    preference: preferenceReducer,
    searchResult: searchResultReducer,
    // [lexApi.reducerPath]: lexApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
    // .concat(lexApi.middleware)
  },
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

