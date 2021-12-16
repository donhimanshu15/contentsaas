import React from 'react';
import { Snackbar, Alert } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const SnackMessage = (props) => {
  const {
    variant, message, snackOpen, handleSnackClose
  } = props;
  return (
    <Snackbar
      open={snackOpen}
      autoHideDuration={4000}
      onClose={handleSnackClose}
    >
      <Alert
        onClose={handleSnackClose}
        severity={variant}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

SnackMessage.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string,
  snackOpen: PropTypes.bool,
  handleSnackClose: PropTypes.func
};

export default SnackMessage;
