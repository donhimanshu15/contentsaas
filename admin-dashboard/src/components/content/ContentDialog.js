import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { PropTypes } from 'prop-types';

const ContentDialog = (props) => {
  const { toggleDialog, isOpen, changeText } = props;
  const { createContent } = props;

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Create Content</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Content Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => changeText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog}>Cancel</Button>
        <Button onClick={createContent}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

ContentDialog.propTypes = {
  toggleDialog: PropTypes.func,
  isOpen: PropTypes.bool,
  changeText: PropTypes.func,
  createContent: PropTypes.func
};

export default ContentDialog;
