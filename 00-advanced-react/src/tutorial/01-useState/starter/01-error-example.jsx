import { useState } from 'react'

const ErrorExample = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className=''>
      <h2>Count : {count} </h2>

      <button className='btn' onClick={handleClick}>
        {' '}
        increase{' '}
      </button>
    </div>
  )
}

export default ErrorExample
