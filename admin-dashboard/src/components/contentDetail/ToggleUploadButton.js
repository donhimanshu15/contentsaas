import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const ToggleUploadButton = ({ filePresent, changeHandler }) => {
  if (!filePresent) {
    return (
      <Button
        component="label"
        sx={{ ml: 2 }}
        color="warning"
        variant="contained"
      >
        Upload File
        <input type="file" hidden onChange={changeHandler} />
      </Button>
    );
  }

  return (
    <Button
      disabled
      component="label"
      sx={{ ml: 2 }}
      color="warning"
      variant="contained"
    >
      Upload File
      <input type="file" hidden onChange={changeHandler} />
    </Button>
  );
};

ToggleUploadButton.propTypes = {
  filePresent: PropTypes.bool,
  changeHandler: PropTypes.func
};

export default ToggleUploadButton;
