import { useSelector } from 'react-redux'
import VoteForAnecdote from './voteForAnecdote'
import Filter from './Filter'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)

  console.log('anecdotes', anecdotes)

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
