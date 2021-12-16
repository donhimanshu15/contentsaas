/* eslint-disable linebreak-style */
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Snackbar,
  Alert
} from '@material-ui/core';
import { auth } from '../Firebase/index';
import logo from '../kreeLogo/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const login = (event) => {
    console.log('Signing in...');
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // console.log(userCredential.user.displayName);
        const userInfo = {
          name: userCredential.user.displayName,
          email: userCredential.user.email
        };
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        navigate('/app/dashboard', {
          state: {
            name: userCredential.user.displayName,
            email: userCredential.user.email
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        seterrorMessage(error.message);
        setOpen(true);
      });
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          alignItems: 'center'
        }}
      >
        <img
          style={{
            width: '120px',
            height: '120px',
            marginTop: '60px',
            marginBottom: '60px'
          }}
          src={logo}
          alt="logo"
        />
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
          >
            {({ errors, isSubmitting, touched }) => (
              <form>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={(e) => {
                    setEmail(e.target.value);
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  value={email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={(e) => {
                    setPassword(e.target.value);
                  }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={login}
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                    underline="hover"
                  >
                    {' '}
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
