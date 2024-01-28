import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

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
      // update the state with the new vote
      const id = action.payload.id
      const anecdoteToChange = state.find((a) => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state.map((a) => (a.id !== id ? a : changedAnecdote))
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

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.getAll()

    dispatch(setAnecdotes(anecdote))
  }
}

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    await anecdoteService.createNew(content)
    dispatch(appendAnecdotes(content))
  }
}

export const voteForAnecdote = (id) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.getOne(id)
    const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    await anecdoteService.update(id, newAnecdote)
    dispatch(voteFor({ id }))
  }
}

export default anecdoteSlice.reducer
