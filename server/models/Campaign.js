const mongoose = require('mongoose')

const campaignSchema = new mongoose.Schema(
  {
    campaignName: {
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
const Campaign = mongoose.model('Campaign', campaignSchema)
module.exports = Campaign
