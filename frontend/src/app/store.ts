import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'
import citationReducer from '../features/citations/citationSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    citation: citationReducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


