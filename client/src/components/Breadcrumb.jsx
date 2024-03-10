import React from 'react'
import { useSelector } from 'react-redux'

function Breadcrumb () {
  const categories = useSelector((state) => state.items.categories)

  return (
    <div className='container'>
      {
        categories.map(category => category.join(' > '))
      }
    </div>
  )
}

export default Breadcrumb
