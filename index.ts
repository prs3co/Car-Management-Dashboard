import express from 'express'
import {
  getCars,
  getCarById,
  addCar,
  updateCarById,
  deleteCarById
} from './server/api/cars'
import upload from './server/middleware/multer'

import knex from 'knex'
import { Model } from 'objection'

const app = express()
const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "car_management",
    user: "postgres",
    password: "macgres",
    port: 5432
  },
})
const port = 8000

Model.knex(knexInstance)

app.get("/api/v1/cars", getCars)
app.get('/api/v1/cars/:id', getCarById)
app.post('/api/v1/cars', upload.single('image'), addCar)
app.put('/api/v1/cars/:id', updateCarById)
app.delete('/api/v1/cars/:id', deleteCarById)

app.listen(port, () => {
  console.log(`Express running on http://localhost:${port}`)
  // console.log('run')
})