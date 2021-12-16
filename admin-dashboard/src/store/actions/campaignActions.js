import axios from 'axios';
import * as types from '../constants';

// @creating campaign
export const createCampaign = (campaignName, email) => async (dispatch, getState) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      campaignName,
      firebaseEmail: email
    };

    const { data } = await axios.post(
      'https://databackupserver.herokuapp.com/api/v1/main/campaign/create',
      body,
      config
    );

    dispatch({
      type: types.CREATE_CAMPAIGN,
      payload: data
    });

    sessionStorage.setItem(
      'campaignItems',
      JSON.stringify(getState().campaigns.campaignItems)
    );
  } catch (error) {
    dispatch({
      type: types.CREATE_CAMPAIGN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// @geting campaign
export const getCampaigns = (firebaseEmail) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://databackupserver.herokuapp.com/api/v1/main/campaigns/${firebaseEmail}`);
    dispatch({
      type: types.GET_CAMPAIGN,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_CAMPAIGN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// @deleting campaign
export const deleteCampaign = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`https://databackupserver.herokuapp.com/api/v1/main/campaign/${id}`);
    dispatch({
      type: types.DELETE_CAMPAIGN,
      payload: id
    });
    sessionStorage.setItem(
      'campaignItems',
      JSON.stringify(getState().campaigns.campaignItems)
    );
  } catch (error) {
    dispatch({
      type: types.DELETE_CAMPAIGN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// @getting campaign Details
export const getCampaignDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://databackupserver.herokuapp.com/api/v1/main/campaign/${id}`);
    dispatch({
      type: types.GET_CAMPAIGN_DETAILS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_CAMPAIGN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
