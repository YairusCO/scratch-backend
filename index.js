import express from 'express'
import bodyParser from 'body-parser'
import { products } from './products.js'
import { MongoClient } from 'mongodb'

const app = express()
const port = 27017

app.use(bodyParser.json())
app.get('/products', (req, res) => {
  res.json(products)
})

app.post('/products', (req, res) => {
  const { body } = req
  res.json({ message: 'Saved' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
