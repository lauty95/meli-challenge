import React from 'react'
import { priceFormatter } from '../../helpers'
import { Link } from 'react-router-dom'

function ItemList ({ item }) {
  return (
    <div className='query-item'>
      <Link to={`/items/${item.id}`}>
        <div className='query-img'>
          <img src={item.picture} alt={item.title} />
        </div>
      </Link>
      <div className='query-details'>
        <span className='query-price'>
          $ {priceFormatter(item.price.amount)}
        </span>
        {item.free_shipping && <div className='query-available' />}
        <p className='query-title'>
          {item.title}
        </p>
      </div>
      <div className='query-zone'>
        <span>Buenos Aires</span>
      </div>
    </div>
  )
}

export default ItemList
