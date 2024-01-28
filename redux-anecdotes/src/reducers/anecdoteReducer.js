import { createStore, combineReducers } from 'redux'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdotesReducer = (state = initialState, action) => {
  if (action.type === 'VOTE') {
    const id = action.data.id
    const anecdoteToChage = state.find((a) => a.id === id)
    const changedAnecdote = {
      ...anecdoteToChage,
      votes: anecdoteToChage.votes + 1,
    }
    return state.map((anecdote) =>
      anecdote.id !== id ? anecdote : changedAnecdote,
    )
  } else if (action.type === 'NEW_ANECDOTE') {
    return [...state, action.data]
  }
  return state
}

const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: { id },
  }
}

const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  }
}

const filterReducer = (state = '', action) => {
  if (action.type === 'SET_FILTER') {
    return action.data.filter
  }
  return state
}

const filter = (filter) => {
  return {
    type: 'SET_FILTER',
    data: { filter },
  }
}

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  filter: filterReducer,
})

const store = createStore(reducer)
export { store, voteFor, createAnecdote, filter }
