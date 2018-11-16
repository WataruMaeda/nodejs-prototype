import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import User from './user'

const port = 3001
const dbUrl = 'mongodb://localhost/crud' 

const app = express()
app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbUrl, { useNewUrlParser: true }, dbErr => {
  if (dbErr) throw new Error(dbErr)
  else console.log('db connected')

  // MARK: - POST

  app.post('/api/user', (req, res) => {
    console.log('receive POST request')
    const { name, age } = req.body
    new User({
      name,
      age
    }).save(err => {
      if (err) return res.status(500)
      res.status(200).send(`${name}(${age}) was successfully created.`)
    })
  })

  // MARK: - GET

  app.get('/api/user', (req, res) => {
    User.find({}, (err, arr) => {
      if (err) return res.status(500).send()
      res.status(200).send(arr)
    })
  })
  
  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})
