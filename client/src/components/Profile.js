import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import {
  Modal,
  Button,
  ModalBody,
  ModalTitle,
  ModalFooter,
} from 'react-bootstrap'
import axios from 'axios'
import ShakaPlayer from 'shaka-player-react'
import 'shaka-player/dist/controls.css'

const Profile = () => {
  const location = useLocation()
  const idArr = location.search
    ? location.search.split('?')[1].split('&')
    : null

  const userId = idArr !== null ? idArr[1] : null
  const contentId = idArr !== null ? idArr[0] : null

  const [url, setUrl] = useState(null)
  const [formId, setFormId] = useState(null)
  const [userDetail, setUserDetail] = useState(null)
  const [formData, setFormData] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mediaType, setMediaType] = useState(null)

  useEffect(() => {
    const getUserDetails = async () => {
      if (idArr) {
        await axios
          .get(`https://databackupserver.herokuapp.com/api/v1/getdetails/${userId}`)
          .then((res) => setUserDetail(res.data))
          .catch((error) => console.log(error))
      }
    }

    getUserDetails()
  }, [userId])

  useEffect(() => {
    const getFormFiles = async () => {
      if (idArr) {
        await axios
          .get(`https://databackupserver.herokuapp.com/api/v1/main/content/form/files/${contentId}`)
          .then((res) => {
            setMediaType(res.data[0].mediaType.split('/')[0])
            console.log(mediaType)
            setUrl(res.data[0].publicURL)
          })
          .catch((error) => console.log(error))
      }
    }

    getFormFiles()
  }, [contentId])

  useEffect(() => {
    const getFormDetails = async () => {
      if (idArr) {
        await axios
          .get(`https://databackupserver.herokuapp.com/api/v1/main/content/form/${idArr[0]}`)
          .then((res) => {
            setFormData(res.data)
            setFormId(res.data._id)
          })
          .catch((error) => console.log(error))
      }
    }

    getFormDetails()
  }, [])

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    let field = {}
    if (formData.type === 'general') {
      if (firstName !== '' && lastName !== '' && email !== '') {
        field = {
          firstName,
          lastName,
          email,
        }
      } else {
        console.log('All fields are required')
      }
    }

    if (formData.type === 'custom') {
      if ('firstName' in formData.field[0] && firstName !== '') {
        field.firstName = firstName
      }
      if ('lastName' in formData.field[0] && lastName !== '') {
        field.lastName = lastName
      }
      if ('email' in formData.field[0] && email !== '') {
        field.email = email
      } else {
        console.log('All fields are required')
      }
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      formId,
      field,
    }

    await axios
      .put('https://databackupserver.herokuapp.com/api/v1/main/content/form', body, config)
      .then(() => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setShowForm(false)
        window.open(url)
      })
      .catch((error) => console.log(error))
  }

  const downloadButtonHandler = () => {
    if (formData !== null) {
      setShowForm(true)
    } else {
      window.open(url)
    }
  }

  return (
    <div>
      <div>
        <header
          id='header'
          className='navbar navbar-expand-lg navbar-light navbar-right bg-white'
        >
          <div className='container'>
            <nav className='js-mega-menu navbar-nav-wrap'>
              <a className='navbar-brand' href='index.html' aria-label='Space'>
                Company Logo
              </a>

              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNavDropdown'
                aria-controls='navbarNavDropdown'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-default'>
                  <i className='bi-list' />
                </span>
                <span className='navbar-toggler-toggled'>
                  <i className='bi-x' />
                </span>
              </button>
              {/* End Toggler */}
              {/* Collapse */}
              <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>
                  {/* Landings */}
                  <li
                    className='hs-has-mega-menu nav-item'
                    data-hs-mega-menu-item-options='{
                "desktop": {
                  "maxWidth": "30rem"
                }
              }'
                  >
                    <a
                      id='landingsMegaMenu'
                      className='hs-mega-menu-invoker nav-link'
                      aria-current='page'
                      href='page-about.html'
                      role='button'
                      aria-expanded='false'
                    >
                      About
                    </a>
                    {/* Mega Menu */}
                    <div
                      className='hs-mega-menu hs-position-right-fix '
                      aria-labelledby='landingsMegaMenu'
                    >
                      {/* Main Content */}
                      <div>
                        <div className='row'></div>
                        {/* End Row */}
                      </div>
                      {/* End Main Content */}
                    </div>
                    {/* End Mega Menu */}
                  </li>
                  {/* End Landings */}
                  {/* Pages */}
                  <li className='hs-has-mega-menu nav-item'>
                    <a
                      id='pagesMegaMenu'
                      className='hs-mega-menu-invoker nav-link  '
                      href='page-pricing.html'
                      role='button'
                      aria-expanded='false'
                    >
                      Pricing
                    </a>
                    {/* Mega Menu */}
                    <div
                      className='hs-mega-menu hs-position-right '
                      aria-labelledby='pagesMegaMenu'
                    >
                      {/* Main Content */}
                      <div>
                        <div className='row'></div>
                        {/* End Row */}
                      </div>
                      {/* End Main Content */}
                    </div>
                    {/* End Mega Menu */}
                  </li>
                  {/* End Pages */}
                  {/* Blog */}
                  <li className='hs-has-sub-menu nav-item'>
                    <a
                      id='blogMegaMenu'
                      className='hs-mega-menu-invoker nav-link  '
                      href='page-contacts.html'
                      role='button'
                      aria-expanded='false'
                    >
                      Contacts
                    </a>
                  </li>

                  <li className='nav-divider' />
                  <li className='nav-item'>
                    <a
                      className='js-animation-link btn btn-ghost-secondary btn-no-focus me-2 me-lg-0'
                      href='javascript:;'
                      role='button'
                      data-bs-toggle='modal'
                      data-bs-target='#signupModal'
                      data-hs-show-animation-options='{
                       "targetSelector": "#signupModalFormLogin",
                       "groupName": "idForm"
                     }'
                    >
                      Log in
                    </a>
                    <a
                      className='js-animation-link d-lg-none btn btn-primary'
                      href='javascript:;'
                      role='button'
                      data-bs-toggle='modal'
                      data-bs-target='#signupModal'
                      data-hs-show-animation-options='{
                       "targetSelector": "#signupModalFormSignup",
                       "groupName": "idForm"
                     }'
                    >
                      <i className='bi-person-circle me-1' /> Sign up
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='js-animation-link d-none d-lg-inline-block btn btn-primary'
                      href='javascript:;'
                      role='button'
                      data-bs-toggle='modal'
                      data-bs-target='#signupModal'
                      data-hs-show-animation-options='{
                       "targetSelector": "#signupModalFormSignup",
                       "groupName": "idForm"
                     }'
                    >
                      <i className='bi-person-circle me-1' /> Sign up
                    </a>
                  </li>
                  {/* End Sign up */}
                </ul>
              </div>
              {/* End Collapse */}
            </nav>
          </div>
        </header>
        {/* ========== END HEADER ========== */}
        {/* ========== MAIN CONTENT ========== */}
        <main id='content' role='main'>
          {/* User Profile */}
          <div className='bg-soft-warning'>
            <div className='container content-space-1 content-space-md-2'>
              <div className='row justify-content-md-center'>
                <div className='col-md-8'>
                  {/* Media */}
                  <div className='d-sm-flex'>
                    <div className='flex-shrink-0 mb-3 mb-sm-0'>
                      {userDetail && (
                        <img
                          className='avatar avatar-xxl avatar-circle'
                          src={userDetail.profilePicture}
                          alt='Image Description'
                        />
                      )}
                    </div>
                    <div className='flex-grow-1 ms-sm-4'>
                      {/* Media */}
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        {userDetail && (
                          <h1 className='h4 mb-0'>{`${userDetail.firstName} ${userDetail.lastName}`}</h1>
                        )}
                      </div>
                      <div className='row mb-3'></div>
                      {userDetail && <p>{userDetail.bio}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='container content-space-1'>
            <div className='row justify-content-md-center'>
              <div className='col-md-8'>
                {/* Articles */}
                <ul className='list-unstyled list-py-3 mb-7'>
                  <li>
                    {/* Card */}
                    <div className='card'>
                      <div className='card-body'>
                        {mediaType !== 'image' &&
                          (mediaType === 'video' || mediaType === 'audio') && (
                            <div
                              className='mb-3 mt-2'
                              style={{ backgroundColor: '#000' }}
                            >
                              <ShakaPlayer autoPlay src={url} />
                            </div>
                          )}
                        {mediaType === 'image' && (
                          <div className='mb-3 mt-2'>
                            <img className='img-fluid' src={url} />
                          </div>
                        )}
                        <div className='mb-3 mt-2'>
                          <button
                            className='btn btn-success'
                            onClick={downloadButtonHandler}
                          >
                            Download File
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    {/* Card */}
                    {userDetail && (
                      <div className='card'>
                        <div className='card-body'>
                          <div className='mb-3'>
                            <ul class='list-group'>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>
                                  Phone Number
                                </p>
                                <h6>{userDetail.phoneNumber}</h6>
                              </li>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>State</p>
                                <h6>{userDetail.state}</h6>
                              </li>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>Country</p>
                                <h6>{userDetail.country}</h6>
                              </li>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>Twitter</p>
                                <h6>{userDetail.twitter}</h6>
                              </li>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>Linkedin</p>
                                <h6>{userDetail.linkedin}</h6>
                              </li>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>Instagram</p>
                                <h6>{userDetail.instagram}</h6>
                              </li>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>You Tube</p>
                                <h6>{userDetail.youtube}</h6>
                              </li>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>Blog</p>
                                <h6>{userDetail.blog}</h6>
                              </li>
                              <li class='list-group-item'>
                                <p className='mt-1 mb-1 ml-0 mr-0'>Video</p>
                                <h6>{userDetail.video}</h6>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* ========== Form Modal ========== */}
        <Modal centered show={showForm} onHide={() => setShowForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Fill this form to download file</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {formData !== null && (
              <form>
                {formData.field[0].firstName && (
                  <div className='form-group mt-2 mb-1'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      placeholder='First Name'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                )}
                {formData.field[0].lastName && (
                  <div className='form-group mt-1 mb-1'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      placeholder='Last Name'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                )}
                {formData.field[0].email && (
                  <div className='form-group mt-1 mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}
                {/* <button
                  type='submit'
                  className='btn btn-primary mt-2'
                  onClick={(e) => formSubmitHandler(e)}
                >
                  Submit
                </button> */}
              </form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShowForm(false)}>
              Close
            </Button>
            <Button variant='primary' onClick={(e) => formSubmitHandler(e)}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        {/* ========== END MAIN CONTENT ========== */}
        {/* ========== SECONDARY CONTENTS ========== */}
        {/* Sign Up */}
        <div
          className='modal fade'
          id='signupModal'
          tabIndex={-1}
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              {/* Header */}
              <div className='modal-close'>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              {/* End Header */}
              {/* Body */}
              <div className='modal-body p-sm-5'>
                {/* Log in */}
                <div
                  id='signupModalFormLogin'
                  style={{ display: 'none', opacity: 0 }}
                >
                  {/* Heading */}
                  <div className='text-center mb-7'>
                    <h4>Log in</h4>
                    <p>
                      Don't have an account yet?
                      <a
                        className='js-animation-link'
                        href='javascript:;'
                        role='button'
                        data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormSignup",
                     "groupName": "idForm"
                   }'
                      >
                        Sign up here
                      </a>
                    </p>
                  </div>
                  {/* End Heading */}
                  <div className='d-grid gap-2'>
                    <a className='btn btn-white btn-lg' href='#'>
                      <span className='d-flex justify-content-center align-items-center'>
                        <img
                          className='avatar avatar-xss me-2'
                          src='assets/svg/brands/google-icon.svg'
                          alt='Image Description'
                        />
                        Log in with Google
                      </span>
                    </a>
                    <a
                      className='js-animation-link btn btn-primary btn-lg'
                      href='#'
                      data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLoginWithEmail",
                   "groupName": "idForm"
                 }'
                    >
                      Log in with Email
                    </a>
                  </div>
                </div>
                {/* End Log in */}
                {/* Log in with Modal */}
                <div
                  id='signupModalFormLoginWithEmail'
                  style={{ display: 'none', opacity: 0 }}
                >
                  {/* Heading */}
                  <div className='text-center mb-7'>
                    <h4>Log in</h4>
                    <p>
                      Don't have an account yet?
                      <a
                        className='js-animation-link'
                        href='javascript:;'
                        role='button'
                        data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormSignup",
                     "groupName": "idForm"
                   }'
                      >
                        Sign up here
                      </a>
                    </p>
                  </div>
                  {/* End Heading */}
                  <form className='js-validate needs-validation' noValidate>
                    {/* Form */}
                    <div className='mb-3'>
                      <label
                        className='form-label'
                        htmlFor='signupModalFormLoginEmail'
                      >
                        Your email
                      </label>
                      <input
                        type='email'
                        className='form-control form-control-lg'
                        name='email'
                        id='signupModalFormLoginEmail'
                        placeholder='email@site.com'
                        aria-label='email@site.com'
                        required
                      />
                      <span className='invalid-feedback'>
                        Please enter a valid email address.
                      </span>
                    </div>
                    {/* End Form */}
                    {/* Form */}
                    <div className='mb-3'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <label
                          className='form-label'
                          htmlFor='signupModalFormLoginPassword'
                        >
                          Password
                        </label>
                        <a
                          className='js-animation-link form-label-link'
                          href='javascript:;'
                          data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormResetPassword",
                   "groupName": "idForm"
                 }'
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        name='password'
                        id='signupModalFormLoginPassword'
                        placeholder='8+ characters required'
                        aria-label='8+ characters required'
                        required
                        minLength={8}
                      />
                      <span className='invalid-feedback'>
                        Please enter a valid password.
                      </span>
                    </div>
                    {/* End Form */}
                    <div className='d-grid mb-3'>
                      <button type='submit' className='btn btn-primary btn-lg'>
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Log in with Modal */}
                {/* Sign up */}
                <div id='signupModalFormSignup'>
                  {/* Heading */}
                  <div className='text-center mb-7'>
                    <h4>Sign up</h4>
                    <p>
                      Already have an account?
                      <a
                        className='js-animation-link'
                        href='javascript:;'
                        role='button'
                        data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                      >
                        Log in here
                      </a>
                    </p>
                  </div>
                  {/* End Heading */}
                  <div className='d-grid gap-3'>
                    <a className='btn btn-white btn-lg' href='#'>
                      <span className='d-flex justify-content-center align-items-center'>
                        <img
                          className='avatar avatar-xss me-2'
                          src='assets/svg/brands/google-icon.svg'
                          alt='Image Description'
                        />
                        Sign up with Google
                      </span>
                    </a>
                    <a
                      className='js-animation-link btn btn-primary btn-lg'
                      href='#'
                      data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignupWithEmail",
                   "groupName": "idForm"
                 }'
                    >
                      Sign up with Email
                    </a>
                    <div className='text-center'>
                      <p className='small mb-0'>
                        By continuing you agree to our{' '}
                        <a href='page-terms.html'>Terms and Conditions</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Sign up */}
                {/* Sign up with Modal */}
                <div
                  id='signupModalFormSignupWithEmail'
                  style={{ display: 'none', opacity: 0 }}
                >
                  {/* Heading */}
                  <div className='text-center mb-7'>
                    <h4>Sign up</h4>
                    <p>
                      Already have an account?
                      <a
                        className='js-animation-link'
                        href='javascript:;'
                        role='button'
                        data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                      >
                        Log in here
                      </a>
                    </p>
                  </div>
                  {/* End Heading */}
                  <form className='js-validate need-validate' noValidate>
                    {/* Form */}
                    <div className='mb-3'>
                      <label
                        className='form-label'
                        htmlFor='signupModalFormSignupEmail'
                      >
                        Your email
                      </label>
                      <input
                        type='email'
                        className='form-control form-control-lg'
                        name='email'
                        id='signupModalFormSignupEmail'
                        placeholder='email@site.com'
                        aria-label='email@site.com'
                        required
                      />
                      <span className='invalid-feedback'>
                        Please enter a valid email address.
                      </span>
                    </div>
                    {/* End Form */}
                    {/* Form */}
                    <div className='mb-3'>
                      <label
                        className='form-label'
                        htmlFor='signupModalFormSignupPassword'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        name='password'
                        id='signupModalFormSignupPassword'
                        placeholder='8+ characters required'
                        aria-label='8+ characters required'
                        required
                      />
                      <span className='invalid-feedback'>
                        Your password is invalid. Please try again.
                      </span>
                    </div>
                    {/* End Form */}
                    {/* Form */}
                    <div className='mb-3' data-hs-validation-validate-class>
                      <label
                        className='form-label'
                        htmlFor='signupModalFormSignupConfirmPassword'
                      >
                        Confirm password
                      </label>
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        name='confirmPassword'
                        id='signupModalFormSignupConfirmPassword'
                        placeholder='8+ characters required'
                        aria-label='8+ characters required'
                        required
                        data-hs-validation-equal-field='#signupModalFormSignupPassword'
                      />
                      <span className='invalid-feedback'>
                        Password does not match the confirm password.
                      </span>
                    </div>
                    {/* End Form */}
                    <div className='d-grid mb-3'>
                      <button type='submit' className='btn btn-primary btn-lg'>
                        Sign up
                      </button>
                    </div>
                    <div className='text-center'>
                      <p className='small mb-0'>
                        By continuing you agree to our{' '}
                        <a href='#'>Terms and Conditions</a>
                      </p>
                    </div>
                  </form>
                </div>
                {/* End Sign up with Modal */}
                {/* Reset Password */}
                <div
                  id='signupModalFormResetPassword'
                  style={{ display: 'none', opacity: 0 }}
                >
                  {/* Heading */}
                  <div className='text-center mb-7'>
                    <h4>Forgot password?</h4>
                    <p>
                      Enter the email address you used when you joined and we'll
                      send you instructions to reset your password.
                    </p>
                  </div>
                  {/* En dHeading */}
                  <form className='js-validate need-validate' noValidate>
                    <div className='mb-3'>
                      {/* Form */}
                      <div className='d-flex justify-content-between align-items-center'>
                        <label
                          className='form-label'
                          htmlFor='signupModalFormResetPasswordEmail'
                          tabIndex={0}
                        >
                          Your email
                        </label>
                        <a
                          className='js-animation-link form-label-link'
                          href='javascript:;'
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                        >
                          <i className='bi-chevron-left small me-1' /> Back to
                          Log in
                        </a>
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className='mb-3'>
                        <input
                          type='email'
                          className='form-control form-control-lg'
                          name='email'
                          id='signupModalFormResetPasswordEmail'
                          tabIndex={1}
                          placeholder='Enter your email address'
                          aria-label='Enter your email address'
                          required
                        />
                        <span className='invalid-feedback'>
                          Please enter a valid email address.
                        </span>
                      </div>
                      {/* End Form */}
                      <div className='d-grid'>
                        <button
                          type='submit'
                          className='btn btn-primary btn-lg'
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Reset Password */}
              </div>
              {/* End Body */}
              {/* Footer */}
              <div className='modal-footer d-block text-center py-sm-5'>
                <small className='text-cap mb-4'>
                  Trusted by the world's best teams
                </small>
                <div className='w-85 mx-auto'>
                  <div className='row justify-content-between'>
                    <div className='col'>
                      <img
                        className='img-fluid'
                        src='assets/svg/brands/gitlab-gray.svg'
                        alt='Logo'
                      />
                    </div>
                    {/* End Col */}
                    <div className='col'>
                      <img
                        className='img-fluid'
                        src='assets/svg/brands/fitbit-gray.svg'
                        alt='Logo'
                      />
                    </div>
                    {/* End Col */}
                    <div className='col'>
                      <img
                        className='img-fluid'
                        src='assets/svg/brands/flow-xo-gray.svg'
                        alt='Logo'
                      />
                    </div>
                    {/* End Col */}
                    <div className='col'>
                      <img
                        className='img-fluid'
                        src='assets/svg/brands/layar-gray.svg'
                        alt='Logo'
                      />
                    </div>
                    {/* End Col */}
                  </div>
                </div>
                {/* End Row */}
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
        {/* Go To */}
        <a
          className='js-go-to go-to position-fixed'
          href='javascript:;'
          style={{ visibility: 'hidden' }}
          data-hs-go-to-options='{
   "offsetTop": 700,
   "position": {
     "init": {
       "right": "2rem"
     },
     "show": {
       "bottom": "2rem"
     },
     "hide": {
       "bottom": "-2rem"
     }
   }
 }'
        >
          <i className='bi-chevron-up' />
        </a>
        {/* ========== END SECONDARY CONTENTS ========== */}
        {/* JS Implementing Plugins */}
        {/* JS Space */}
        {/* JS Plugins Init. */}
      </div>
    </div>
  )
}

export default Profile
