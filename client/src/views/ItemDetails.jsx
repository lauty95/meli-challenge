import React, { useEffect, useState } from 'react'
import { itemsMeli } from '../configs/axiosConfig'
import { useParams } from 'react-router-dom'
import { priceFormatter } from '../../helpers'

function ItemDetails () {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    if (id) {
      itemsMeli.get(`/items/${id}`)
        .then((res) => {
          setItem(res.data.item)
        })
        .catch((err) => {
          console.error(err)
          setItem(null)
        })
    }
  }, [id])

  return (
    <div className='details-card'>
      <section className='details-section'>
        <img src={item?.picture} alt={item?.title} />
        <h2>Descripción del producto</h2>
        <p>{item?.description}</p>
      </section>
      <section className='details-price'>
        <span>
          {item?.condition === 'new' ? 'Nuevo' : 'Usado'} - {item?.sold_quantity} vendidos
        </span>
        <h2>{item?.title}</h2>
        <h1>$ {priceFormatter(item.price.amount)}</h1>
        <div className='btn-primary'>Comprar</div>
      </section>
    </div>
  )
}

export default ItemDetails
