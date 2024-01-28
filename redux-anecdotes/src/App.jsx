import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import AnecdoteForm from './components/addAnecdotes'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
