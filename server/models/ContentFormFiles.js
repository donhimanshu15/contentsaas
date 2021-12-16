const mongoose = require('mongoose')

const ContentFormFilesSchema = mongoose.Schema(
  {
    contentId: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
    },
    publicURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const ContentFormFiles = mongoose.model(
  'ContentFormFiles',
  ContentFormFilesSchema
)

module.exports = ContentFormFiles
