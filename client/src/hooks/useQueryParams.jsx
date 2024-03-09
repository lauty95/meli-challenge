import { useSearchParams } from 'react-router-dom'

function useQueryParams () {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  return {
    query
  }
}

export default useQueryParams
