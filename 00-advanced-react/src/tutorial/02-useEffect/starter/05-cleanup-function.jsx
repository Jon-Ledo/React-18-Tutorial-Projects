import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className=''>
      <h2>cleanup function</h2>

      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>

      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    console.log('hmm this is interesting')

    const intId = setInterval(() => {
      console.log('hello from interval')
    }, 1000)

    return () => {
      clearInterval(intId)
    }
  }, [])
  return <h1>Random Component</h1>
}

export default CleanupFunction
