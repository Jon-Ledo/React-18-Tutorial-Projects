import { useEffect, useState } from 'react'

const useGenericFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    // change name
    const fetchData = async () => {
      try {
        const resp = await fetch(url)

        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        // change to response
        const response = await resp.json()
        setData(response)
      } catch (error) {
        setIsError(true)
        // console.log(error);
      }
      // hide loading
      setIsLoading(false)
    }
    // invoke fetch data
    fetchData()
  }, [])

  return { isLoading, isError, data }
}

export default useGenericFetch
