# Backend Basic

## Tutorial

- [Create GprapgQL Server](https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1)

## Procedure

1. Create folder named your project and cd /your-project-name
2. run `npm init`
3. run `npm install express nodemon morgan babel-cli babel-preset-es2015 body-parser express-graphql graphql axios --save`
4. run `touch .babelrc` and write code
```
{
  "presets" : ["es2015"],
}
```
5. run `touch server.js` and write code
See *Sample 1 (Basic example)*  or *Sample 2*
6. go to `package.json` and add start spcipt
```
  "scripts": {
    "start": "nodemon --exec babel-node server.js"
  },
```
7. run `npm start`in terminal
8. open `http://localhost:3003/graphql` to see the response

## Sample 1 (Basic example)

```
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import expressGraphQL from 'express-graphql'
import { buildSchema } from 'graphql'

const port = 3001
const app = express()
app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var schema = buildSchema(`
  type Query {
    message: String
  }
`);

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
  rootValue: {
    message: () => 'Hello World!'
  },
}))

app.listen(port, () => {
  console.log(`Express GraphQL Server is up and listening in localhost:${port}/graphql...`)
})

```

## Sample 2

```
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import expressGraphQL from 'express-graphql'
import { buildSchema } from 'graphql'

const port = 3001
const app = express()
app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

const coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]

const getCourse = function(args) { 
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

const getCourses = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

const root = {
    course: getCourse,
    courses: getCourses
};

// Create an express server and a GraphQL endpoint
app.use('/graphql', expressGraphQL({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port, () => {
  console.log(`Express GraphQL Server is up and listening in localhost:${port}/graphql...`)
})
```