import { voteFor, sort } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { clearNotification } from '../reducers/notificationReducer'

const VoteForAnecdote = ({ id, name }) => {
  const dispatch = useDispatch()

  const handleVote = (id, name) => {
    dispatch(voteFor({ id }))
    dispatch(
      setNotification({
        message: `you voted for '${name}'`,
        type: 'success',
      }),
    )
    setTimeout(() => {
      dispatch(clearNotification())
    }, 3000)
  }

  dispatch(sort())

  return (
    <>
      <button onClick={() => handleVote(id, name)}>vote</button>
    </>
  )
}

export default VoteForAnecdote
