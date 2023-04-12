import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      name: 'Susan',
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div className=''>
      <h2>user challenge</h2>

      {user ? (
        <button className='btn' onClick={logout}>
          logout
        </button>
      ) : (
        <button className='btn' onClick={login}>
          login
        </button>
      )}

      <h4>{user ? `hello there, ${user.name}` : 'please log in'}</h4>
    </div>
  )
}

export default UserChallenge
