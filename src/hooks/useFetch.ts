import { useState, useEffect } from 'react'

type GetAPIFunction<T> = () => Promise<T>

const useFetch = <T>(getAPI: GetAPIFunction<T>, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAPI()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return data
}

export default useFetch
