import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories, setItems } from '../store/items'
import { itemsMeli } from '../configs/axiosConfig'
import ItemList from '../components/ItemList'
import useQueryParams from '../hooks/useQueryParams'
import Breadcrumb from '../components/Breadcrumb'
import Line from '../components/Line'

const PRODUCTS_LIMITS = 4

function ItemsResult () {
  const { query } = useQueryParams()
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items.list)

  useEffect(() => {
    if (query) {
      itemsMeli.get(`/items?q=${query}`)
        .then((res) => {
          const listItems = res.data?.items.slice(0, PRODUCTS_LIMITS) || []
          dispatch(setItems(listItems))
          dispatch(setCategories(res.data.categories))
        })
        .catch((err) => {
          console.error(err)
          dispatch(setItems([]))
        })
    }
  }, [query])

  return (
    <>
      <Breadcrumb />
      <section className='container mb-3'>
        <div className='card d-flex flex-column p-2'>
          {items?.length > 0 &&
            items.map((item, index) =>
              <React.Fragment key={item.id}>
                <ItemList item={item} />
                {index !== items.length - 1 && <Line />}
              </React.Fragment>)}
        </div>
      </section>
    </>
  )
}

export default ItemsResult
