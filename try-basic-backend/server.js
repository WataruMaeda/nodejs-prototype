import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const port = 3003
const app = express()
app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello from Rooooooooot')
})

app.get('/users', (req, res) => {
  const user1 = {
    id: 1,
    name: 'test-1',
    message: 'Hello test 1 user'
  }
  // res.json(user1)
  const user2 = {
    id: 2,
    name: 'test-2',
    message: 'Hello test 2 user'
  }
  res.json([user1, user2])
})

app.listen(port, () => {
  console.log(`Server is up and listening in ${port} ...`)
})
