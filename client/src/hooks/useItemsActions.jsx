import { setItemsReducer } from '../store/items'
import { useDispatch, useSelector } from 'react-redux'

function useItemsActions () {
  const dispatch = useDispatch()

  const setItems = (items) => {
    return dispatch(setItemsReducer(items))
  }

  const getItems = () => {
    return useSelector(state => state.items)
  }

  return { setItems, getItems }
}

export default useItemsActions
