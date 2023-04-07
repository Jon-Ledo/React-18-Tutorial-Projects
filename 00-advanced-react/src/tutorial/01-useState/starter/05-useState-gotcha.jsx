import { useState } from 'react'

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  // const increase = () => {
  //   setCount(count + 1)
  //   console.log(count)
  // }

  const increase = () => {
    setCount((currentState) => {
      // must return otherwise undefined
      // below is the latest/current state value
      const newState = currentState + 1
      console.log(newState)
      return newState
    })
  }
  return (
    <div>
      <h2>useState "gotcha"</h2>

      <p>You clicked {count} times</p>
      <button className='btn' onClick={increase}>
        increase
      </button>
      <p></p>

      <p>Check console</p>
      <p>state function is not synchronous</p>
    </div>
  )
}

export default UseStateGotcha
