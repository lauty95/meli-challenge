import { useSearchParams } from 'react-router-dom'

function useQuery () {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  return {
    query
  }
}

export default useQuery
