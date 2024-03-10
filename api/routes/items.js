import { Router } from 'express'
import { getDecimals } from '../helpers/index.js'
import { apiItemsDetail, apiSearchItems } from '../configs/axiosConfig.js'

const router = Router()

router.get('/items/:id', async (req, res) => {
  const itemId = req.params?.id
  if (!itemId) {
    return res.status(400).json({ error: true, descripcion: 'Sin item id' })
  }
  try {
    const itemData = await apiItemsDetail.get(`/${itemId}`)
    const descriptionData = await apiItemsDetail.get(`/${itemId}/description`)
    const response = {
      author: {
        name: 'Lautaro',
        lastname: 'Juarez'
      },
      item: {
        id: itemData.data.id,
        title: itemData.data.title,
        price: {
          currency: itemData.data.currency_id,
          amount: itemData.data.price,
          decimals: getDecimals(itemData.data.price)
        },
        picture: itemData.data.thumbnail,
        condition: itemData.data.condition,
        free_shipping: itemData.data.shipping.free_shipping,
        sold_quantity: itemData.data.initial_quantity,
        description: descriptionData.data.plain_text
      }
    }

    res.status(200).json(response)
  } catch (error) {
    res.status(501).json(error)
  }
})

router.get('/items', async (req, res) => {
  const search = req.query.q
  if (!search) {
    return res.status(400).json({ error: true, descripcion: 'Sin search params' })
  }

  try {
    const { data } = await apiSearchItems.get(`/search?q=${search}`)

    const items = data.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        price: {
          amount: result.price,
          currency: result.currency_id,
          decimals: getDecimals(result.price)
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
      }
    })

    const categoriesValues = data.filters[0]?.values.map((value) => value) || []

    const categories = categoriesValues.map((value) => value.path_from_root.map((category) => category.name))

    const response = {
      author: {
        name: 'Lautaro',
        lastname: 'Juarez'
      },
      categories,
      items
    }

    res.status(200).json(response)
  } catch (error) {
    res.status(501).json(error)
  }
})

export default router
