import React from 'react'
import { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {
  // const [isChecked, setIsChecked] = useState(item.completed)

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        className='checkbox'
        // checked={isChecked}
        // onChange={() => setIsChecked(!isChecked)}
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          // textDecoration: isChecked ? 'line-through' : null,
          textDecoration: item.completed ? 'line-through' : null,
        }}
      >
        {item.name}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  )
}

export default SingleItem
