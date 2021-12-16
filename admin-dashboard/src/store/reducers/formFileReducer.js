import * as types from '../constants';
/* eslint no-underscore-dangle: 0 */
const addFileReducer = (state = { fileItems: [] }, action) => {
  switch (action.type) {
    case types.ADD_FORM_FILE: {
      const item = action.payload;
      return {
        ...state,
        fileItems: [...state.fileItems, item],
        error: null,
        success: 'File added succssfully'
      };
    }
    case types.ADD_FORM_FILE_FAIL:
      return { loading: false, error: action.payload };

    // get content cases
    case types.GET_FORM_FILE:
      return { loading: false, fileItems: action.payload, error: null };
    case types.GET_FORM_FILE_FAIL:
      return { loading: false, error: action.payload };

    // delete content cases
    case types.DELETE_FORM_FILE:
      return {
        ...state,
        fileItems: state.fileItems.filter((x) => x._id !== action.payload),
        error: null,
        success: 'File deleted succssfully'
      };
    case types.DELETE_FORM_FILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default addFileReducer;
