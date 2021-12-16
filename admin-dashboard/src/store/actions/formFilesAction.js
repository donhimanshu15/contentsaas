import axios from 'axios';
import * as types from '../constants';

// @geting files
export const getFiles = (contentId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://databackupserver.herokuapp.com/api/v1/main/content/form/files/${contentId}`
    );
    dispatch({
      type: types.GET_FORM_FILE,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_FORM_FILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// adding file to database
export const addFile = (id, url, mediaType) => async (dispatch, getState) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      contentId: id,
      publicURL: url,
      mediaType
    };

    const { data } = await axios.post(
      'https://databackupserver.herokuapp.com/api/v1/main/content/form/files',
      body,
      config
    );

    dispatch({
      type: types.ADD_FORM_FILE,
      payload: data
    });

    sessionStorage.setItem(
      'fileItems',
      JSON.stringify(getState().files.fileItems)
    );
  } catch (error) {
    dispatch({
      type: types.ADD_FORM_FILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// deleting file
export const delFile = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`https://databackupserver.herokuapp.com/api/v1/main/content/form/files/${id}`);
    dispatch({
      type: types.DELETE_FORM_FILE,
      payload: id
    });
    sessionStorage.setItem(
      'fileItems',
      JSON.stringify(getState().files.fileItems)
    );
  } catch (error) {
    dispatch({
      type: types.DELETE_FORM_FILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
