import axios from 'axios'

export const apiItemsDetail = axios.create({
  baseURL: 'https://api.mercadolibre.com/items'
})

export const apiSearchItems = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLA'
})
