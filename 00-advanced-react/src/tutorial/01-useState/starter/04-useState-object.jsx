import { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(30)
  const [hobby, seHobby] = useState('youtube')

  const [person, setPerson] = useState({
    name: 'Jon',
    age: 31,
    hobby: 'Screaming at computer',
  })

  const handleClick = () => {
    setPerson({
      name: 'Peter',
      age: 31,
      hobby: 'Reading books',
    })
  }

  return (
    <div>
      <h2>useState object example</h2>

      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.hobby}</p>

      <button className='btn' onClick={handleClick}>
        show Peter
      </button>
    </div>
  )
}

export default UseStateObject
