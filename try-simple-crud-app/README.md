# Basic CRUD App

## Docs

- [MongoDB](http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/)
- [Mongoose](https://mongoosejs.com/docs/index.html)
- [Good crud app sample (jp)](https://qiita.com/ymr-39/items/573247b12ff0bc4e5d3c#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E5%81%B4%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB)
- [Good crud app sample (en)](https://zellwk.com/blog/crud-express-mongodb/) 
## Procedure

1. Create folder named your project
2. run `npm init`
3. run `npm install express nodemon morgan mongodb mongoose body-parser --save`
4. add script in `package.json`

i.e.
```
"scripts": {
  "start": "nodemon server.js"
},
```

5. add `server.js` and write code below

i.e.
```
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
```
