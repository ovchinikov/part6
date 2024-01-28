import { useSelector } from 'react-redux'
import VoteForAnecdote from './voteForAnecdote'
import Filter from './Filter'
const AnecdoteList = () => {
  const filterValue = useSelector((state) => state.filter)
  const anecdotes = useSelector((state) => state.anecdotes)

  //  filter by filterValue
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterValue.toLowerCase()),
  )

  //  sort by votes
  filteredAnecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <>
      <Filter />
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <VoteForAnecdote id={anecdote.id} />
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
