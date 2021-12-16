/* eslint-disable linebreak-style */
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Snackbar,
  Alert
} from '@material-ui/core';

import { FilePond } from 'react-filepond';
import PropTypes from 'prop-types';
import 'filepond/dist/filepond.min.css';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const AccountProfileDetails = (props) => {
  const { setUserDetail } = props;
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    youtube: '',
    blog: '',
    video: '',
    bio: '',
    firebaseEmail: '',
    files: []
  });
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('success');
  const [open, setOpen] = useState(false);
  const userInfo = sessionStorage.getItem('userInfo')
    ? JSON.parse(sessionStorage.getItem('userInfo'))
    : null;
  values.firebaseEmail = userInfo ? userInfo.email : null;
  const userEmail = userInfo ? userInfo.email : null;

  // Loads data from DB on startup
  useEffect(() => {
    if (!userEmail) {
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        country: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        youtube: '',
        blog: '',
        video: '',
        bio: '',
        firebaseEmail: '',
        files: []
      });
    } else {
      const url = 'https://databackupserver.herokuapp.com/api/v1/getdetails';
      const reqobj = { firebaseEmail: userEmail };
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqobj)
      })
        .then((res) => res.json())
        .then((res) => {
          const obj = {
            firstName: res[0].firstName,
            lastName: res[0].lastName,
            email: res[0].email,
            phone: res[0].phone,
            state: res[0].state,
            country: res[0].country,
            twitter: res[0].twitter,
            linkedin: res[0].linkedin,
            instagram: res[0].instagram,
            youtube: res[0].youtube,
            blog: res[0].blog,
            video: res[0].video,
            bio: res[0].bio,
            firebaseEmail: res[0].firebaseEmail,
            files: []
          };
          setValues(obj);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [userEmail]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  values.firebaseEmail = userEmail;

  const getUser = async () => {
    console.log('Getting...');
    const url = 'https://databackupserver.herokuapp.com/api/v1/getdetails';
    const reqobj = { firebaseEmail: userEmail };
    const data = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqobj)
    });
    const newData = await data.json();
    console.log(newData);
    if (newData.length === 0) {
      return false;
    }
    return true;
  };

  const sendFormData = async (e) => {
    console.log('Sending data...');
    e.preventDefault();
    const exists = await getUser();

    if (exists) {
      try {
        const data = await fetch('https://databackupserver.herokuapp.com/api/v1/updatedetails', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        const newData = await data.json();
        setOpen(true);
        setMessage(newData.message);
        setColor('success');
        setUserDetail({
          firstName: values.firstName,
          lastName: values.lastName
        });
      } catch (err) {
        setOpen(true);
        setMessage(err.message);
        setColor('error');
      }
    } else {
      try {
        const data = await fetch('https://databackupserver.herokuapp.com/api/v1/details', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        const newData = await data.json();
        setOpen(true);
        setMessage(newData.message);
        setColor('success');
      } catch (err) {
        setOpen(true);
        setMessage(err.message);
        setColor('error');
      }
    }
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <form autoComplete="off" noValidate {...props}>
        <Card>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  helperText="Add a Short Bio about Yourself"
                  label="Short Bio"
                  name="bio"
                  onChange={handleChange}
                  required
                  value={values.bio}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  helperText="Please specify the last name"
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Enter your email address"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Enter your phone number"
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  helperText="Enter your country"
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Select your State"
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  helperText="Provide your Twitter Account Link"
                  fullWidth
                  label="Twitter Link"
                  name="twitter"
                  onChange={handleChange}
                  required
                  value={values.twitter}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Linkedin Account Link"
                  label="LinkedIn Link"
                  name="linkedin"
                  onChange={handleChange}
                  required
                  value={values.linkedin}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Instagram Account Link"
                  label="Instagram Link"
                  name="instagram"
                  onChange={handleChange}
                  required
                  value={values.instagram}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Youtube Account Link"
                  label="Youtube Link"
                  name="youtube"
                  onChange={handleChange}
                  required
                  value={values.youtube}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Blog Link"
                  label="Blog Link"
                  name="blog"
                  onChange={handleChange}
                  required
                  value={values.blog}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Video Link"
                  label="Video Link"
                  name="video"
                  onChange={handleChange}
                  required
                  value={values.video}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <FilePond
                  files={files}
                  onupdatefiles={setFiles}
                  maxFiles={1}
                  name="files"
                  labelIdle='Upload files here by Drag and Drap or <span class="filepond--label-action">Browse</span>'
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button onClick={sendFormData} color="primary" variant="contained">
              Save details
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};

AccountProfileDetails.propTypes = {
  setUserDetail: PropTypes.func
};

export default AccountProfileDetails;
