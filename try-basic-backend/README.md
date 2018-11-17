# Backend Basic

1. Create folder named your project and cd /your-project-name
2. run `npm init`
3. run `npm install express nodemon morgan babel-cli babel-preset-es2015 body-parser --save`
4. run `touch .babelrc` and write code
```
{
  "presets" : ["es2015"],
}
```
5. run `touch server.js` and write code
```
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

```
6. go to `package.json` and add start spcipt
```
  "scripts": {
    "start": "nodemon --exec babel-node server.js"
  },
```
7. run `npm start`in terminal
8. open `http://localhost:3003/` or `/users` to see the response