import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ItemsResult from './views/ItemsResult'
import ItemDetails from './views/ItemDetails'

function App () {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/items' element={<ItemsResult />} />
        <Route path='/items/:id' element={<ItemDetails />} />
        <Route path='*' element={<h1>Página no existente</h1>} />
      </Routes>
    </main>
  )
}

export default App
