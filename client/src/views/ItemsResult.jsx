import React, { useEffect, useState } from 'react'
import { itemsMeli } from '../configs/axiosConfig'
import ItemList from '../components/ItemList'
import useQuery from '../hooks/query'

const PRODUCTS_LIMITS = 4

function ItemsResult () {
  const { query } = useQuery()
  const [items, setItems] = useState([])

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
