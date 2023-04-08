import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import authRoutes from './routes/authRoutes'
import productsRoutes from './routes/productsRoutes'
import categoryRoutes from './routes/categoryRoutes'

dotenv.config()

function normalizePort (val:string) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

const PORT = normalizePort(process.env.PORT || '3001')

mongoose.connect(process.env.MONGO_URL||'')
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', (err) => {
  console.error('ERRO DE CONEXÃO COM O MONGO DB')
  console.error(err)
  console.error.bind(console, 'connection error:')
})
db.once('open', function () {
  console.log('Connected to mongo!')
})

const app = express()

app.use(express.json())
app.use(productsRoutes)
app.use(categoryRoutes)
app.use(authRoutes)

app.listen(PORT, () => (console.log(`Startou na porta ${PORT}`)))
