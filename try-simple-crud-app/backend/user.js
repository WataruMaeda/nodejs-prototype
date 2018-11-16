import mongoose from 'mongoose'

mongoose.Promise = global.Promise

// create schema
const schema = new mongoose.Schema({
  name: String,
  age: Number,
})

// create model
export default mongoose.model('User', schema)