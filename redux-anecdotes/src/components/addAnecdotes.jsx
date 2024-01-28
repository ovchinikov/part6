import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import {
  clearNotification,
  setNotification,
} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value

    dispatch(setNotification({ message: `You added ${content}` }))

    event.target.anecdote.value = ''
    dispatch(createNewAnecdote(content))

    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
