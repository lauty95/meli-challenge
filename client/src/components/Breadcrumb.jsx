import React from 'react'
import { useSelector } from 'react-redux'

function Breadcrumb () {
  const categories = useSelector((state) => state.items.categories)

  return (
    <div className='container mt-1 mb-1' style={{ color: '#999999' }}>
      <span>
        {categories.map(category => category.join(' > '))}
      </span>
    </div>
  )
}

export default Breadcrumb
