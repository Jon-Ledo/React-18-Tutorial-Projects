import { useState } from 'react'

const ToggleChallenge = () => {
  const [value, setValue] = useState(false)

  return (
    <div className=''>
      <h2>toggle challenge</h2>

      <button className='btn' onClick={() => setValue(!value)}>
        toggle
      </button>

      {value && <SomeComponent />}
    </div>
  )
}
const SomeComponent = () => {
  return (
    <div className=''>
      <h4>Rendered component</h4>
    </div>
  )
}

export default ToggleChallenge
