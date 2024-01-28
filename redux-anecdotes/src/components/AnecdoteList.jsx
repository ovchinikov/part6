import { useSelector, useDispatch } from 'react-redux'
import VoteForAnecdote from './voteForAnecdote'
import { filter } from '../reducers/anecdoteReducer'
const AnecdoteList = () => {
  const dispatch = useDispatch()
  const filterValue = useSelector((state) => state.filter)
  const anecdotes = useSelector((state) => state.anecdotes)

  const handleFilterChange = (event) => {
    dispatch(filter(event.target.value))
  }

  //  filter by filterValue
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterValue.toLowerCase()),
  )

  console.log(filteredAnecdotes)
  //  sort by votes
  anecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <>
      <h2>Anecdotes</h2>
      <h1>Filter</h1>
      <input
        type='text'
        name='filter'
        id='filter'
        onChange={handleFilterChange}
      />
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
