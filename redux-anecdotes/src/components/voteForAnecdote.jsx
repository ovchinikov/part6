import { sort, voteForAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'
const VoteForAnecdote = ({ id, name }) => {
  const dispatch = useDispatch()

  const handleVote = (id, name) => {
    dispatch(voteForAnecdote(id))
    dispatch(setNotificationWithTimeout(`you voted '${name}'`, 5))
  }

  dispatch(sort())

  return (
    <>
      <button onClick={() => handleVote(id, name)}>vote</button>
    </>
  )
}

VoteForAnecdote.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
}

export default VoteForAnecdote
