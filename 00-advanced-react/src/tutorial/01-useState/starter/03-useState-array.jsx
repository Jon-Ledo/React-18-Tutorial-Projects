import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const handleClick = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }

  return (
    <>
      <h2>useState array example</h2>

      {people.map((person) => {
        return (
          <div className='' key={person.id}>
            <p>{person.name}</p>
            <button onClick={() => handleClick(person.id)}>remove</button>
          </div>
        )
      })}

      <button className='btn' onClick={() => setPeople([])}>
        Clear List
      </button>
    </>
  )
}

export default UseStateArray
