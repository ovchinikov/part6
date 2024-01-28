import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import VoteForAnecdote from './voteForAnecdote'
import { setAnecdotes } from '../reducers/anecdoteReducer'
import Filter from './Filter'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then((anecdotes) => {
      dispatch(setAnecdotes(anecdotes))
    })
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
