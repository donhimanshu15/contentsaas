// Schema for User Details
const mongoose = require('mongoose')

//Schema
const UserDetails = new mongoose.Schema({
  bio: {
    type: String,
    default: '',
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePicture: String,
  phoneNumber: String,
  country: String,
  state: String,
  twitter: String,
  youtube: String,
  instagram: String,
  linkedin: String,
  blog: String,
  video: String,
  firebaseEmail: {
    type: String,
    required: true,
  },
})

//Model
const UserModel = mongoose.model('UserDetails', UserDetails)

module.exports = UserModel
