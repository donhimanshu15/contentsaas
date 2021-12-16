import axios from 'axios';
import * as types from '../constants';

// @creating content
export const createContent = (content, email) => async (dispatch, getState) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      content,
      firebaseEmail: email
    };

    const { data } = await axios.post(
      'https://databackupserver.herokuapp.com/api/v1/main/content/create',
      body,
      config
    );

    dispatch({
      type: types.CREATE_CONTENT,
      payload: data
    });

    sessionStorage.setItem(
      'contentItems',
      JSON.stringify(getState().contents.contentItems)
    );
  } catch (error) {
    dispatch({
      type: types.CREATE_CONTENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// @geting content
export const getContents = (firebaseEmail) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://databackupserver.herokuapp.com/api/v1/main/contents/${firebaseEmail}`);
    dispatch({
      type: types.GET_CONTENT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_CONTENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// @getting content Details
export const getContentDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://databackupserver.herokuapp.com/api/v1/main/content/${id}`);
    dispatch({
      type: types.GET_CONTENT_DETAILS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_CONTENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// @deleting content
export const deleteContent = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`https://databackupserver.herokuapp.com/api/v1/main/content/${id}`);
    dispatch({
      type: types.DELETE_CONTENT,
      payload: id
    });
    sessionStorage.setItem(
      'contentItems',
      JSON.stringify(getState().contents.contentItems)
    );
  } catch (error) {
    dispatch({
      type: types.DELETE_CONTENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
