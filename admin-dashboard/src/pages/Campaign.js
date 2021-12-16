import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CampaignDialog from '../components/campaign/CampaignDialog';
import {
  createCampaign,
  deleteCampaign,
  getCampaigns
} from '../store/actions/campaignActions';
import SnackMessage from '../components/SnackMessage';
import CampaignTable from '../components/campaign/CampaignTable';

const Campaign = () => {
  const userInfo = sessionStorage.getItem('userInfo')
    ? JSON.parse(sessionStorage.getItem('userInfo'))
    : null;

  const dispatch = useDispatch();

  // getting all contents from store
  const campaigns = useSelector((state) => state.campaigns);
  const { campaignItems, error, success } = campaigns;

  // all states
  const [open, setOpen] = useState(false);
  const [campaignName, setCampaignName] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    if (userInfo) {
      dispatch(getCampaigns(userInfo.email));
    }
  }, [dispatch]);

  const toggleDialog = () => {
    setOpen(!open);
  };

  const onChangeText = (value) => {
    setCampaignName(value);
  };

  const create = () => {
    if (userInfo) {
      dispatch(createCampaign(campaignName, userInfo.email));
      setSnackOpen(true);
      toggleDialog();
    }
  };

  // deleting content
  const remove = (id) => {
    if (userInfo) {
      dispatch(deleteCampaign(id));
      setSnackOpen(true);
    }
  };

  const handleSnackClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  return (
    <div>
      <Button style={{ margin: 50 }} variant="contained" onClick={toggleDialog}>
        Create Campaign
      </Button>
      <CampaignDialog
        isOpen={open}
        toggleDialog={toggleDialog}
        changeText={onChangeText}
        createCampaign={create}
      />
      {campaignItems !== undefined ? (
        <CampaignTable campaign={campaignItems} deleteCampaign={remove} />
      ) : (
        <CampaignTable campaign={[]} deleteCampaign={remove} />
      )}
      {success && (
        <SnackMessage
          variant="success"
          message={success}
          snackOpen={snackOpen}
          handleSnackClose={handleSnackClose}
        />
      )}
      {error && (
        <SnackMessage
          variant="success"
          message={error}
          snackOpen={snackOpen}
          handleSnackClose={handleSnackClose}
        />
      )}
    </div>
  );
};

export default Campaign;
