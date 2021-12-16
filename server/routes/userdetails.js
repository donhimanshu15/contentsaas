const router = require('express').Router()
const UserModel = require('../models/UserDetails')

// fetching user detail using email
router.post('/getdetails', async (req, res) => {
  try {
    const data = await UserModel.findOne(
      { firebaseEmail: req.body.firebaseEmail },
      { useFindAndModify: false }
    )
    res.status(200).json(data)
  } catch (err) {
    console.log('error occured')
    res.status(500).json({ message: err.message })
  }
})

// fetching user detail using id
router.get('/getdetails/:id', async (req, res) => {
  try {
    const data = await UserModel.findById({ _id: req.params.id })
    res.status(200).json(data)
  } catch (err) {
    console.log('error occured')
    res.status(500).json({ message: err.message })
  }
})

router.post('/updatedetails', async (req, res) => {
  try {
    const updatedData = await UserModel.findOneAndUpdate(
      { firebaseEmail: req.body.firebaseEmail },
      {
        bio: req.body.bio,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phone,
        country: req.body.country,
        state: req.body.state,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
        youtube: req.body.youtube,
        blog: req.body.blog,
        video: req.body.video,
      },
      { new: true }
    )
    console.log(updatedData)
    res
      .status(200)
      .json({ message: 'User detail has been successfully updated' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/details', async (req, res) => {
  const newUserDetail = new UserModel({
    bio: req.body.bio,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phone,
    country: req.body.country,
    state: req.body.state,
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    instagram: req.body.instagram,
    youtube: req.body.youtube,
    blog: req.body.blog,
    video: req.body.video,
    firebaseEmail: req.body.firebaseEmail,
  })

  try {
    const newDetail = await newUserDetail.save()
    console.log(newDetail)
    res.status(200).json({ message: 'User detail has been successfully saved' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
    console.error(error.message)
  }
})

router.put('/updateProfilePicture', async (req, res) => {
  try {
    const { profilePicture, firebaseEmail } = req.body
    const updatedPicture = await UserModel.findOneAndUpdate(
      { firebaseEmail: firebaseEmail },
      { profilePicture }
    )

    if (updatedPicture) {
      res.status(200).json({ message: 'Profile Picture Updated' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// get post
module.exports = router
