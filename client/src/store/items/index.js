import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: [],
    categories: []
  },
  reducers: {
    setItems: (state, { payload }) => {
      state.list = [...payload]
    },
    setCategories: (state, { payload }) => {
      state.categories = payload
    }
  }
})

export default itemsSlice.reducer

export const { setItems, setCategories } = itemsSlice.actions
