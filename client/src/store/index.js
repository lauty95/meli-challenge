import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './items'

export const store = configureStore({
  reducer: {
    items: itemsSlice
  }
})
