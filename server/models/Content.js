const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema(
  {
    contentName: {
      type: String,
      required: true,
    },
    firebaseEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const Content = mongoose.model('Content', contentSchema)
module.exports = Content
