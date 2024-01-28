import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const anecdote = action.payload
      state.push(anecdote)
    },

    appendAnecdotes(state, action) {
      state.push(action.payload)
    },

    setAnecdotes(state, action) {
      return action.payload
    },

    voteFor(state, action) {
      console.log(JSON.parse(JSON.stringify(state)))
      const id = action.payload.id
      console.log('id', id)
      const anecdoteToChange = state.find((a) => a.id === id)
      console.log(
        'anecdoteToChange',
        JSON.parse(JSON.stringify(anecdoteToChange)),
      )
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote,
      )
    },

    filter(state = '', action) {
      return state.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(action.payload.toLowerCase()),
      )
    },

    sort(state) {
      return state.sort((a, b) => b.votes - a.votes)
    },
  },
})

export const {
  createAnecdote,
  voteFor,
  filter,
  sort,
  appendAnecdotes,
  setAnecdotes,
} = anecdoteSlice.actions

export default anecdoteSlice.reducer
