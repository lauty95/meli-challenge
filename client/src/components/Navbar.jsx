import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useQueryParams from '../hooks/useQueryParams'

function Navbar () {
  const navigate = useNavigate()
  const { query } = useQueryParams()
  const [search, setSearch] = useState(query || '')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/items?q=${search}`)
  }

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <input
          type='search'
          placeholder='Nunca dejes de buscar'
          onChange={handleChange}
          value={search}
        />
      </form>
    </nav>
  )
}

export default Navbar
