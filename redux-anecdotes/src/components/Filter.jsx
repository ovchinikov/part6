import { useDispatch } from 'react-redux'
import { filter } from '../reducers/anecdoteReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleFilterChange = (event) => {
    dispatch(filter(event.target.value))
  }
  const style = {
    marginBottom: 10,
  }
  return (
    <>
      <h3>Filter</h3>
      <div className={style}>
        <input
          type='text'
          name='filter'
          id='filter'
          onChange={handleFilterChange}
        />
      </div>
    </>
  )
}

export default Filter
