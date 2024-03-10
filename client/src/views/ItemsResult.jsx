import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories, setItems } from '../store/items'
import { itemsMeli } from '../configs/axiosConfig'
import ItemList from '../components/ItemList'
import useQueryParams from '../hooks/useQueryParams'
import Breadcrumb from '../components/Breadcrumb'

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
      <div className='container'>
        {
        items?.length > 0
          ? items.map(item => <ItemList item={item} key={item.id} />)
          : 'No'
    }
      </div>
    </>
  )
}

export default ItemsResult
