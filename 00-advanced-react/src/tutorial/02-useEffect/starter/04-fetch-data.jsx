const url = 'https://api.github.com/users'
import { useState, useEffect } from 'react'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    try {
      async function fetchData() {
        const resp = await fetch(url)
        const data = await resp.json()
        setUsers(data)

        console.log(data)
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <section className=''>
      <h3>Github Users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, html_url, avatar_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div className=''>
                <h5>{login}</h5>
                <a href={html_url}>{html_url}</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
