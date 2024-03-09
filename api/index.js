import express from 'express'
import items from './routes/items.js'
import cors from 'cors'

const PORT = 3001
const app = express()
app.use(cors())

app.use('/api', items)

app.listen(PORT, () => { console.log(`Server iniciado en el puerto ${PORT}`) })
