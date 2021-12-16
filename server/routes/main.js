const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const { v4: uuidv4 } = require('uuid')
// Getting Module
const Products_Model = require('../models/Products')
const MainStore_Model = require('../models/MainStore')
const Content = require('../models/Content')
const ContentForm = require('../models/ContentForm')
const ContentFormFiles = require('../models/ContentFormFiles')
const Campaign = require('../models/Campaign')
const List = require('../models/List')

const stripe = require('stripe')(
  'sk_test_51IdwfeH8KzFo5uc9YHKzp2HOPkZJvH0ij0qhWeg0wQ17G73o5fVJYjMkWOfAmWUgjVZe0DesJvrQKbmAPSacXsVP00qMXnEqFr'
)

function isNumeric(str) {
  if (typeof str != 'string') return false // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ) // ...and ensure strings of whitespace fail
}

// TEST
// @GET TEST
// GET
router.get('/test', (req, res) => {
  res.send('Working')
})

router.post('/charges', async (req, res) => {
  const { email, amount } = req.body
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'eur',
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
    receipt_email: email,
  })

  res.json({ client_secret: paymentIntent['client_secret'] })
})

// Database CRUD Operations
// @POST Request to GET the People
// GET
router.get('/getallproductapi', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  Products_Model.find({})
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Database CRUD Operations
// @POST Request to GET the People
// GET
router.get('/getallproductsmainstorefilters/:filter', (req, res) => {
  const { filter } = req.params
  res.setHeader('Content-Type', 'application/json')
  MainStore_Model.find({ gender: filter })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Database CRUD Operations
// @POST Request to GET the Product Details
// GET
router.get('/getproductitemdetails/:id', (req, res) => {
  const { id } = req.params
  res.setHeader('Content-Type', 'application/json')
  MainStore_Model.find({ _id: id })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Database CRUD Operations
// @POST Request to GET the People
// GET
router.get('/getallproductsapifilters/:filter', (req, res) => {
  const { filter } = req.params
  res.setHeader('Content-Type', 'application/json')
  Products_Model.find({ Gender: filter })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// ************* Content ************** //

// Database CRUD Operations
// @GET Request to GET all content of a user
// GET
router.get('/contents/:firebaseEmail', async (req, res) => {
  try {
    const { firebaseEmail } = req.params
    const data = await Content.find({ firebaseEmail: firebaseEmail })
    res.status(200)
    res.send(data)
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @GET Request to GET specific content details
// GET
router.get('/content/getEmails', async (req, res) => {
  try {
    const data = await Content.find({}, { _id: 0, firebaseEmail: true })
    res.status(200)
    res.send(data)
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @GET Request to GET specific content details
// GET
router.get('/content/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await Content.findById({ _id: id })
    res.status(200)
    res.send(data)
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @POST Request to Post the content
// POST
router.post('/content/create', async (req, res) => {
  try {
    const { firebaseEmail, content } = req.body

    const data = await Content.create({
      contentName: content,
      firebaseEmail: firebaseEmail,
    })

    if (data) {
      res.status(200).send(data)
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @DELETE Deleting content using _id
// DELETE
router.delete('/content/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await Content.findById({ _id: id })
    if (data) {
      await Content.deleteOne({ _id: id })
        .then(() => res.status(200).send('Content Deleted Successfully'))
        .catch((error) => console.log(`Error: ${error.message}`))
    } else {
      throw new Error('Content not existed !')
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// ************* Content --> Form ************** //

// Database CRUD Operations
// @GET Request to get the content form using contentId
// GET
router.get('/content/form/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await ContentForm.findOne({ contentId: id })
    if (data) {
      res.status(200)
      res.send(data)
    } else {
      res.status(404)
      res.send('not found')
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @POST Request to Post the content form
// POST
router.post('/content/form', async (req, res) => {
  try {
    const { contentName, contentId, type, field } = req.body
    const data = await ContentForm.create({
      contentName: contentName,
      contentId: contentId,
      type: type,
      field: field,
    })
    if (data) {
      res.status(200).send(data)
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @DELETE Request to Delete the content form
// DELETE
router.delete('/content/form/:id', async (req, res) => {
  try {
    const { id } = req.params
    const form = await ContentForm.findById({ _id: id })
    if (form) {
      await ContentForm.deleteOne({ _id: id })
        .then(() => res.status(200).send('Form Deleted Successfully'))
        .catch((error) => console.log(`Error: ${error.message}`))
    } else {
      throw new Error('Form not available')
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @PUT Request to update the field of content form
// PUT
router.put('/content/form', async (req, res) => {
  try {
    const { field, formId } = req.body
    const data = await ContentForm.updateOne(
      { _id: formId },
      {
        $push: {
          field: field,
        },
      }
    )
    if (data) {
      res.status(200).send(data)
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// ************* Content --> Files ************** //

// Database CRUD Operations
// @POST Request to post the content form files
// POST
router.post('/content/form/files', async (req, res) => {
  try {
    console.log('adding form files')
    const { contentId, publicURL, mediaType } = req.body

    const data = await ContentFormFiles.create({
      contentId,
      publicURL,
      mediaType,
    })

    if (data) {
      res.status(200).send(data)
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @GET Request to get the content form files
// GET
router.get('/content/form/files/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await ContentFormFiles.find({ contentId: id })
    res.status(200)
    res.send(data)
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @DELETE Request to Delete the content form file
// DELETE
router.delete('/content/form/files/:id', async (req, res) => {
  try {
    console.log('deleting form files')
    const { id } = req.params
    const file = await ContentFormFiles.findById({ _id: id })
    if (file) {
      await ContentFormFiles.deleteOne({ _id: id })
        .then(() => res.status(200).send('File Deleted Successfully'))
        .catch((error) => console.log(`Error: ${error.message}`))
    } else {
      throw new Error('File not available')
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// ************* Campaign ************** //

// Database CRUD Operations
// @GET Request to GET all campaign of a user
// GET
router.get('/campaigns/:firebaseEmail', async (req, res) => {
  try {
    const { firebaseEmail } = req.params
    const data = await Campaign.find({ firebaseEmail: firebaseEmail })
    res.status(200)
    res.send(data)
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @GET Request to GET specific campaign details
// GET
router.get('/campaign/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await Campaign.findById({ _id: id })
    res.status(200)
    res.send(data)
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @POST Request to Post the content
// POST
router.post('/campaign/create', async (req, res) => {
  try {
    const { firebaseEmail, campaignName } = req.body
    const data = await Campaign.create({
      campaignName,
      firebaseEmail,
    })

    if (data) {
      res.status(200).send(data)
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @DELETE Deleting content using _id
// DELETE
router.delete('/campaign/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await Campaign.findById({ _id: id })
    if (data) {
      await Campaign.deleteOne({ _id: id })
        .then(() => res.status(200).send('Campaign Deleted Successfully'))
        .catch((error) => console.log(`Error: ${error.message}`))
    } else {
      throw new Error('Campaign not existed !')
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// ************* Campaign --> list ************** //

// Database CRUD Operations
// @POST Request to create list
// POST
router.post('/list/create', async (req, res) => {
  try {
    const { listName, campaignId, emailList } = req.body
    const data = await List.create({
      listName,
      campaignId,
      emailList,
    })
    if (data) {
      res.status(200).send(data)
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @DELETE Request to delete the list
// DELETE
router.delete('/list/:id', async (req, res) => {
  try {
    const { id } = req.params
    const list = await List.findById({ _id: id })
    if (list) {
      await List.deleteOne({ _id: id })
        .then(() => res.status(200).send('List Deleted Successfully'))
        .catch((error) => console.log(`Error: ${error.message}`))
    } else {
      throw new Error('List not available')
    }
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// Database CRUD Operations
// @GET Request to get the content form files
// GET
router.get('/list/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await List.find({ campaignId: id })
    res.status(200)
    res.send(data)
  } catch (error) {
    res.send(`Error: ${error.message}`)
  }
})

// ************* sending email to all emails in list ************** //

router.post('/sendEmail', async (req, res) => {
  try {
    const { fromEmail, subject, emailBody, to } = req.body

    const transport = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.pass,
      },
    })

    await transport.sendMail({
      from: fromEmail,
      to: to,
      subject: subject,
      text: emailBody,
    })

    res.status(200)
    res.send('Message sent successfully')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
