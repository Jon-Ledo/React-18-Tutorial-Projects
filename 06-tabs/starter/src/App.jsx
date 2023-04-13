import { useEffect } from 'react'
import { useState } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchJobs = async () => {
    const resp = await fetch(url)
    const newJobs = await resp.json()

    setJobs(newJobs)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    )
  }

  return (
    <section className='jobs-center'>
      {/* button container */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* job info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
