import axios from 'axios';
import * as types from '../constants';

// @add list
export const addList = (name, emails, id) => async (dispatch, getState) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      listName: name,
      emailList: emails,
      campaignId: id
    };

    const { data } = await axios.post('https://databackupserver.herokuapp.com/api/v1/main/list/create', body, config);

    dispatch({
      type: types.CREATE_LIST,
      payload: data
    });

    sessionStorage.setItem(
      'listItems',
      JSON.stringify(getState().lists.listItems)
    );
  } catch (error) {
    dispatch({
      type: types.CREATE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// @geting lists
export const getLists = (campaignId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://databackupserver.herokuapp.com/api/v1/main/list/${campaignId}`);
    dispatch({
      type: types.GET_LIST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// deleteing list
export const delList = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`https://databackupserver.herokuapp.com/api/v1/main/list/${id}`);
    dispatch({
      type: types.DELETE_LIST,
      payload: id
    });
    sessionStorage.setItem(
      'listItems',
      JSON.stringify(getState().lists.listItems)
    );
  } catch (error) {
    dispatch({
      type: types.DELETE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
