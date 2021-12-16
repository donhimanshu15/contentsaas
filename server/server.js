const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const colors = require('colors')
const cors = require('cors')

require('dotenv').config()

// Route Files
const main = require('./routes/main')
const detailsRouter = require('./routes/userdetails')

// DB Connection
const db = require('./config/keys').MongoURI
const { route } = require('./routes/main')
// Connect MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'.green.bold))
  .catch((err) => console.log(err))

const app = express()

app.use(cors())
app.use(express.json())

// Routing for API Service
app.use('/api/v1/main', main)
app.use('/api/v1/', detailsRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))
