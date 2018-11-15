const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const port = 3001
const dbUrl = 'mongodb://localhost/crud' 
const app = express()
app.use(morgan('short'))

mongoose.connect(dbUrl, dbErr => {
  if (dbErr) throw new Error(dbErr)
  else console.log('db connected')
  
  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})

// app.get('/', (req, res) => {
//   res.send('Hello from Rooooooooot')
// })

// app.get('/users', (req, res) => {
//   const user1 = {
//     id: 1,
//     name: 'test-1',
//     message: 'Hello test 1 user'
//   }
//   // res.json(user1)
//   const user2 = {
//     id: 2,
//     name: 'test-2',
//     message: 'Hello test 2 user'
//   }
//   res.json([user1, user2])
// })

// app.listen(port, () => {
//   console.log('Server is up and listening in 3003 ...')
// })
