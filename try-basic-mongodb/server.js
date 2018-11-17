import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import User from './user'

const port = 3001
const dbUrl = 'mongodb://localhost/test' 

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
    if (!name || !age) return res.status(400).send('cannot')
    new User({
      name,
      age
    }).save(err => {
      if (err) return res.status(500).send()
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
  
  // MARK: - PUT

  app.put('/api/user', (req, res) => {
    const { id } = req.body
    User.findByIdAndUpdate(id, { $inc: { "age": 1 } }, err => {
      if (err) return res.status(500).send()
      User.find({}, (findErr, arr) => {
        if (findErr) return res.status(500).send()
        res.status(200).send(arr)
      })
    })
  })

  // MARK: - DELETE

  app.delete('/api/user', (req, res) => {
    const { id } = req.body
    User.findByIdAndRemove(id, err => {
      if (err) return res.status(500).send()
      User.find({}, (findErr, arr) => {
        if (findErr) return res.status(500).send()
        res.status(200).send(arr)
      })
    })
  })

  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})