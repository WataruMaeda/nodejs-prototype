const mongoose = reruire('mongoose')

mongoose.Promise = global.Promise

// create schema
const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
})

// create model
export default mongoose.model('Users', schema)