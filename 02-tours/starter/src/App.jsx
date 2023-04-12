const url = 'https://course-api.com/react-tours-project'
import { useEffect, useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const tours = await resp.json()
      setTours(tours)
      console.log(tours)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button
            className='btn'
            type='button'
            style={{ marginTop: '2rem' }}
            onClick={() => fetchData()}
          >
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  )
}
export default App
