import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/addAnecdotes'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
