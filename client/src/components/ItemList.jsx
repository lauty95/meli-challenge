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
        <h3 className='query-price'>
          $ {priceFormatter(item.price.amount)}
        </h3>
        {item.free_shipping && <div className='query-available' />}
        <h4 className='query-title'>
          {item.title}
        </h4>
      </div>
      <div className='query-zone'>
        <span>Buenos Aires</span>
      </div>
    </div>
  )
}

export default ItemList
