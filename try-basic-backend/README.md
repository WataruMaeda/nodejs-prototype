# Backend Basic

## Procedure

1. Create folder named your project
2. run `npm init`
3. run `npm install express nodemon morgan --save`
4. add `app.js`
5. write code in `app.js

i.e.
```
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('short'))

app.get('/', (req, res) => {
  res.send('Hello from Root!')
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

app.listen(3003, () => {
  console.log('Server is up and listening in 3003 ...')
})

```
6. run `nodemon app.js`in terminal
7. open `http://localhost:3003/` or `/users`