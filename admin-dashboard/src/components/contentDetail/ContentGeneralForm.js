import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  OutlinedInput,
  Button
} from '@material-ui/core';
import { PropTypes } from 'prop-types';

const ContentGeneralForm = (props) => {
  const { handleSubmit } = props;
  const field = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email'
  };
  return (
    <Box>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <FormLabel id="name">First Name</FormLabel>
        <OutlinedInput
          required
          id="first-name"
          type="first-name"
          autoComplete="first-name"
          autoFocus
          disabled
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <FormLabel id="name">Last Name</FormLabel>
        <OutlinedInput
          required
          id="last-name"
          type="last-name"
          autoComplete="last-name"
          autoFocus
          disabled
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <FormLabel id="email">Email</FormLabel>
        <OutlinedInput
          required
          id="email"
          type="email"
          autoComplete="email"
          autoFocus
          disabled
        />
      </FormControl>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => handleSubmit(field)}>
        Submit Form
      </Button>
    </Box>
  );
};

ContentGeneralForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default ContentGeneralForm;
