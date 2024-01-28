import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: [],

  reducers: {
    filter(state = '', action) {
      console.log(JSON.parse(JSON.stringify(state)))
      return state.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(action.payload.toLowerCase()),
      )
    },
  },
})

export const { filter } = filterSlice.actions

export default filterSlice.reducer
