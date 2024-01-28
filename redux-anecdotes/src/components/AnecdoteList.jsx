import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import VoteForAnecdote from './voteForAnecdote'
import { initializeAnecdotes } from '../reducers/anecdoteReducer'
import Filter from './Filter'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
    //lint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const anecdotes = useSelector((state) => state.anecdotes)

  return (
    <>
      <Filter />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <VoteForAnecdote id={anecdote.id} name={anecdote.content} />
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
