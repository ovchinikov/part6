import { voteFor } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const VoteForAnecdote = ({ id }) => {
  const dispatch = useDispatch()
  const vote = (id) => () => {
    dispatch(voteFor(id))
  }
  return (
    <>
      <button onClick={vote(id)}>vote</button>
    </>
  )
}

export default VoteForAnecdote
