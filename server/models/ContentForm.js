const mongoose = require('mongoose')

const contentFormSchema = new mongoose.Schema({
  contentName: {
    type: String,
    required: true,
  },
  contentId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  field: [mongoose.Schema.Types.Mixed]
}, {strict: false})

const ContentForm = mongoose.model('ContentForm', contentFormSchema)

module.exports = ContentForm
