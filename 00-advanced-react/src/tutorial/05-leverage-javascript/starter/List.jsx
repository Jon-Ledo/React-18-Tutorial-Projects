import React from 'react'
import { people as data } from '../../../data'
import Person from './Person'

const List = () => {
  console.log(data)
  return (
    <main>
      {data.map((person) => {
        return (
          <article key={person.id}>
            <Person person={person} />
          </article>
        )
      })}
    </main>
  )
}

export default List
