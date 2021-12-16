import React, { useState, useEffect } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  FormControl,
  Button
} from '@material-ui/core';
import { PropTypes } from 'prop-types';

const ContentCustomForm = (props) => {
  const { handleSubmit } = props;

  const [fNameCheck, setFNameCheck] = useState(false);
  const [lNameCheck, setLNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const field = {};

  useEffect(() => {
    if (fNameCheck) {
      field.firstName = 'First Name';
    }
    if (lNameCheck) {
      field.lastName = 'Last Name';
    }
    if (emailCheck) {
      field.email = 'Email';
    }
  }, [fNameCheck, lNameCheck, emailCheck]);

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={(
            <Checkbox
              checked={fNameCheck}
              onChange={(e) => setFNameCheck(e.target.checked)}
            />
          )}
          label="First Name"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={lNameCheck}
              onChange={(e) => setLNameCheck(e.target.checked)}
            />
          )}
          label="Last Name"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={emailCheck}
              onChange={(e) => setEmailCheck(e.target.checked)}
            />
          )}
          label="Email"
        />
      </FormGroup>
      {fNameCheck && (
        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            required
            id="first-name"
            type="first-name"
            autoComplete="first-name"
            autoFocus
            label="First Name"
            disabled
          />
        </FormControl>
      )}
      {lNameCheck && (
        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            required
            id="last-name"
            type="last-name"
            autoComplete="last-name"
            autoFocus
            label="Last Name"
            disabled
          />
        </FormControl>
      )}
      {emailCheck && (
        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            required
            id="email"
            type="email"
            autoComplete="email"
            autoFocus
            label="Email"
            disabled
          />
        </FormControl>
      )}
      {(fNameCheck || lNameCheck || emailCheck) && (
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => handleSubmit(field)}>
          Submit Form
        </Button>
      )}
    </Box>
  );
};

ContentCustomForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default ContentCustomForm;
