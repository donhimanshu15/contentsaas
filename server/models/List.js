const mongoose = require('mongoose')

const listSchema = new mongoose.Schema(
  {
    listName: {
      type: String,
      required: true,
    },
    campaignId: {
      type: String,
      required: true,
    },
    emailList: [mongoose.Schema.Types.Mixed],
  },
  { strict: false }
)

const List = mongoose.model('List', listSchema)

module.exports = List
