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

const CampaignDialog = (props) => {
  const { toggleDialog, isOpen, changeText } = props;
  const { createCampaign } = props;

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Create Campaign</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Campaign Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => changeText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog}>Cancel</Button>
        <Button onClick={createCampaign}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

CampaignDialog.propTypes = {
  toggleDialog: PropTypes.func,
  isOpen: PropTypes.bool,
  changeText: PropTypes.func,
  createCampaign: PropTypes.func
};

export default CampaignDialog;
