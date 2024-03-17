import React, { useEffect, useState } from 'react'
import { itemsMeli } from '../configs/axiosConfig'
import { useParams } from 'react-router-dom'
import { priceFormatter } from '../helpers'
import Breadcrumb from '../components/Breadcrumb'

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
          setItem({ error: true })
        })
    }
  }, [id])

  return (
    <>
      <Breadcrumb />
      <section className='container mb-3'>
        <div className='card'>
          {(item !== null)
            ? (item?.error)
                ? (<h2 style={{ textAlign: 'center' }}>Parece que este producto no existe</h2>)
                : (
                  <>
                    <section className='details-section d-flex'>
                      <img src={item?.picture} alt={item?.title} />
                      <div className='details-price mt-1 mr-1'>
                        <span>
                          {item?.condition === 'new' ? 'Nuevo' : 'Usado'} - {item?.sold_quantity} vendidos
                        </span>
                        <h3 className='mt-1 mb-1'>{item?.title}</h3>
                        <h1 className='mt-1 mb-2 d-flex'>{priceFormatter(item?.price.amount?.toFixed(0))}
                          <span className='details-decimals'>
                            {`${item?.price.decimals > 10 ? item?.price.decimals : `${item?.price.decimals}0`}`}
                          </span>
                        </h1>
                        <div className='btn-primary'>Comprar</div>
                      </div>
                    </section>
                    <section className='details-description ml-1'>
                      <h2 className='mb-2'>Descripción del producto</h2>
                      <p className='mb-2'>{item?.description}</p>
                    </section>
                  </>
                  )
            : <></>}
        </div>
      </section>
    </>
  )
}

export default ItemDetails
