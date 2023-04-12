import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className=''>
      <h2>short circuit - examples</h2>

      <h4>{text || 'default value'}</h4>

      {name && (
        <div>
          <h2>whatever return</h2>
          <h4>{name}</h4>
        </div>
      )}

      {user && <SomeComponent name={user.name} />}

      <h2>Ternary Operator</h2>
      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
    </div>
  )
}
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Other Component</h2>
      <h4>{name}</h4>
    </div>
  )
}

export default ShortCircuitExamples
