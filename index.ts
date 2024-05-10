import express from 'express'
import {
  getCars,
  getCarById,
  addCar,
  updateCarById,
  deleteCarById
} from './server/api/cars'
import upload from './server/middleware/multer'

const app = express()
const port = 8000


app.get('/api/v1/cars', getCars)
app.get('/api/v1/cars', getCarById)
app.post('/api/v1/cars', upload.single('img'), addCar)
app.put('/api/v1/cars', updateCarById)
app.delete('/api/v1/cars', deleteCarById)

app.listen(port, () => {
  console.log(`Express running on http://localhost:${port}`)
})