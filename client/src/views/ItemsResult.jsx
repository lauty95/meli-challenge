import React, { useEffect } from 'react'
import { itemsMeli } from '../configs/axiosConfig'
import ItemList from '../components/ItemList'
import useQueryParams from '../hooks/useQueryParams'
import { useSelector } from 'react-redux'
import useItemsActions from '../hooks/useItemsActions'
const PRODUCTS_LIMITS = 4

function ItemsResult () {
  const { query } = useQueryParams()
  const { setItems } = useItemsActions()
  const items = useSelector((state) => state.items.list)

  useEffect(() => {
    if (query) {
      itemsMeli.get(`/items?q=${query}`)
        .then((res) => {
          const listItems = res.data?.items.slice(0, PRODUCTS_LIMITS) || []
          setItems(listItems)
        })
        .catch((err) => {
          console.error(err)
          setItems([])
        })
    }
  }, [query])

  return (
    <div>
      {
        items?.length > 0
          ? items.map(item => <ItemList item={item} key={item.id} />)
          : 'No'
    }
    </div>
  )
}

export default ItemsResult
