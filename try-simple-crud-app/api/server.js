const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

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
    console.log(req.body)
    res.status(200).send()
  })
  
  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})
