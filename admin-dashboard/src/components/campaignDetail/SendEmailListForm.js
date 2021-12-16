import React, { useState } from 'react';
import {
  Box,
  FormGroup,
  Button,
  FormControlLabel,
  Checkbox,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import SnackMessage from '../SnackMessage';

const emailList = [];

const CustomCheckBox = (props) => {
  const { item } = props;
  const { listName } = item;
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked(true);
      const index = emailList.indexOf(item.emailList);
      if (index === -1) {
        emailList.push(item.emailList);
      }
    } else {
      setChecked(false);
      const index = emailList.indexOf(item.emailList);
      if (index !== -1) {
        emailList.splice(index, 1);
      }
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={(e) => handleChange(e)} />
        }
        label={listName}
      />
    </div>
  );
};

const SendEmailListForm = (props) => {
  const {
    listItems,
    setDialogOpen,
    fromEmail,
    emailBody,
    subject,
    setSnackVariant,
    setSnackMessage,
    Open
  } = props;

  const [variant, setVariant] = useState(null);
  const [message, setMessage] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);

  const sendEmails = async (emails) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = {
        fromEmail,
        subject,
        emailBody,
        to: emails
      };

      const { data } = await axios.post('https://databackupserver.herokuapp.com/api/v1/main/sendEmail', body, config);

      console.log(data);
      setSnackMessage(data);
      setSnackVariant('success');
      Open(true);
    } catch (error) {
      console.log(error);
      setSnackMessage(error.message ? error.message : error);
      setSnackVariant('error');
      Open(true);
    }
  };

  const submitForm = () => {
    const emails = new Set();
    emailList.forEach((x) => {
      x.forEach((email) => {
        emails.add(email);
      });
    });

    const emailsString = Array.from(emails).join(',');
    if (fromEmail === '' || emailBody === '' || subject === '') {
      setMessage('All fields are required*');
      setVariant('error');
      setSnackOpen(true);
    } else if (emailsString === '') {
      setMessage('Please select atleast one list');
      setVariant('error');
      setSnackOpen(true);
    } else {
      sendEmails(emailsString);
      setDialogOpen(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
    setDialogOpen(false);
  };

  return (
    <Box>
      <FormGroup>
        {listItems.map((item) => (
          <CustomCheckBox item={item} />
        ))}
      </FormGroup>
      {listItems.length === 0 ? (
        <Typography variant="h3">
          There is no list, please create a list first
        </Typography>
      ) : (
        <Button sx={{ mt: 2 }} variant="contained" onClick={submitForm}>
          Submit
        </Button>
      )}
      <SnackMessage
        variant={variant}
        message={message}
        snackOpen={snackOpen}
        handleSnackClose={handleClose}
      />
    </Box>
  );
};

SendEmailListForm.propTypes = {
  listItems: PropTypes.array,
  setDialogOpen: PropTypes.func,
  fromEmail: PropTypes.string,
  emailBody: PropTypes.string,
  subject: PropTypes.string,
  setSnackVariant: PropTypes.func,
  setSnackMessage: PropTypes.func,
  Open: PropTypes.func
};

CustomCheckBox.propTypes = {
  item: PropTypes.object
};

export default SendEmailListForm;
