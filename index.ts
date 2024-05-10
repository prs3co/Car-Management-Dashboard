import express from 'express'

const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('hello dunia')
})

app.listen(port, () => {
  console.log(`Express running on http://localhost:${port}`)
})