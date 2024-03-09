import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: []
  },
  reducers: {
    setItemsReducer: (state, { payload }) => {
      state.list = [...payload]
    }
  }
})

export default itemsSlice.reducer

export const { setItemsReducer } = itemsSlice.actions
