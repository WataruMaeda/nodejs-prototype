# MongoDB Basic

## Docs

- [MongoDB doc](http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/)
- [Mongoose](https://mongoosejs.com/docs/index.html)

## Procedure

1. Create folder named your project and cd /your-project-name
2. run `npm init`
3. run `npm install express nodemon morgan babel-cli babel-preset-es2015 body-parser mongodb, mongoose --save`
4. run `touch .babelrc` and write code
```
{
  "presets" : ["es2015"],
}
```
5. run `touch user.js` to add schema and write code
````
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

// create schema
const schema = new mongoose.Schema({
  name: String,
  age: Number,
})

// create model
export default mongoose.model('User', schema)
````
5. run `touch server.js` and write code
```
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

```
6. go to `package.json` and add start spcipt
```
  "scripts": {
    "start": "nodemon --exec babel-node server.js"
  },
```
7. run `npm start`in terminal
8. open `http://localhost:3001/` and try get `{host}/api/user` to see the response
You can check the response with [Advanced REST client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) 