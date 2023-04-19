import React from 'react'
import avatar from '../../../assets/default-avatar.svg'

const Person = ({ person }) => {
  const { name, nickName, images } = person
  // const img = images && images[0] && images[0].small && images[0].small.url

  // optional chaining ?.
  const img = images?.[0]?.small?.url || avatar
  console.log(img)
  return (
    <div>
      <h2>{name}</h2>
      <span>{nickName ? `also know as... ${nickName}` : null}</span>

      <img src={img} alt={name} style={{ width: '50px' }} />
    </div>
  )
}

export default Person
