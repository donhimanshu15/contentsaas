/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
// import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Snackbar,
  Alert
} from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import { storage } from '../../Firebase';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

const AccountProfile = (props) => {
  const [url, setUrl] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState(null);
  const [userData, setUserData] = useState(null);

  const { userName } = props;

  const userInfo = sessionStorage.getItem('userInfo')
    ? JSON.parse(sessionStorage.getItem('userInfo'))
    : null;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const selectImageHandler = (e) => {
    e.preventDefault();
    const selected = e.target.files[0];
    if (selected) {
      const storageRef = storage.ref(selected.name);

      storageRef.put(selected).on(
        'state_changed',
        (snap) => {
          const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          console.log(percentage);
        },
        (err) => {
          setMessage(err);
          setColor('error');
          setOpen(true);
        },
        async () => {
          const uri = await storageRef.getDownloadURL();
          try {
            const config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            const body = {
              profilePicture: uri,
              firebaseEmail: userInfo.email
            };
            const { data } = await axios.put(
              'https://databackupserver.herokuapp.com/api/v1/updateProfilePicture',
              body,
              config
            );
            setUrl(uri);
            setMessage(data.message);
            setColor('success');
            setOpen(true);
          } catch (error) {
            setMessage(error);
            setColor('error');
            setOpen(true);
          }
        }
      );
    } else {
      setMessage('Please again upload file');
      setColor('error');
      setOpen(true);
    }
  };

  // run whenever email of login user found
  useEffect(() => {
    if (userInfo !== null) {
      const getUserDetail = async () => {
        if (userInfo.email !== null) {
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          const body = {
            firebaseEmail: userInfo.email
          };
          await axios
            .post('https://databackupserver.herokuapp.com/api/v1/getdetails', body, config)
            .then((res) => {
              setUserData(res.data);
              setUrl(res.data.profilePicture);
            })
            .catch((err) => {
              setMessage(err);
              setColor('error');
              setOpen(true);
            });
        }
      };
      getUserDetail();
    }
  }, [userInfo]);

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <Card {...props}>
        <CardContent>
          {userInfo && (
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Avatar
                src={url !== null ? url : null}
                sx={{
                  height: 100,
                  width: 100
                }}
              />
              {userData && userName === null ? (
                <Typography color="textPrimary" gutterBottom variant="h3">
                  {`${userData.firstName} ${userData.lastName}`}
                </Typography>
              ) : (
                <Typography color="textPrimary" gutterBottom variant="h3">
                  {userName !== null
                    ? `${userName.firstName} ${userName.lastName}`
                    : userInfo.name}
                </Typography>
              )}
              {/* <Typography color="textSecondary" variant="body1">
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {`${moment().format('hh:mm A')} ${user.timezone}`}
            </Typography> */}
            </Box>
          )}
        </CardContent>
        <Divider />
        <CardActions>
          <Button component="label" color="primary" fullWidth variant="text">
            <input type="file" hidden onChange={selectImageHandler} />
            Upload picture
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

AccountProfile.propTypes = {
  userName: PropTypes.object
};

export default AccountProfile;
