import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'
import fragmentReducer from '../features/fragments/fragmentSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    fragment: fragmentReducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


