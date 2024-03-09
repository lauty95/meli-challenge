import React from 'react'
import { useSelector } from 'react-redux'

function Breadcrumb () {
  const categories = useSelector((state) => state.items.categories)

  return (
    <div>
      {
        categories.map(category => category.join(' > '))
      }
    </div>
  )
}

export default Breadcrumb
