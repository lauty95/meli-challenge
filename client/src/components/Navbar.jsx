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
    if (search) {
      event.preventDefault()
      navigate(`/items?q=${search}`)
    }
  }

  const goHome = () => {
    navigate('/')
    setSearch('')
  }

  return (
    <nav>
      <div className='container'>
        <div className='logo-ml' onClick={goHome} />
        <form onSubmit={handleSubmit}>
          <input
            type='search'
            placeholder='Nunca dejes de buscar'
            onChange={handleChange}
            value={search}
          />
          <img src='/assets/ic_Search@2x.png' alt='Buscar' onClick={handleSubmit} />
        </form>
      </div>
    </nav>
  )
}

export default Navbar
