import * as types from '../constants';
/* eslint no-underscore-dangle: 0 */
const ListReducer = (state = { listItems: [] }, action) => {
  switch (action.type) {
    case types.CREATE_LIST: {
      const item = action.payload;
      return {
        ...state,
        listItems: [...state.listItems, item],
        error: null,
        success: 'list added succssfully'
      };
    }
    case types.CREATE_LIST_FAIL:
      return { loading: false, error: action.payload };

    // get list cases
    case types.GET_LIST:
      return { loading: false, listItems: action.payload, error: null };
    case types.GET_LIST_FAIL:
      return { loading: false, error: action.payload };

    // delete content cases
    case types.DELETE_LIST:
      return {
        ...state,
        listItems: state.listItems.filter((x) => x._id !== action.payload),
        error: null,
        success: 'List deleted succssfully'
      };
    case types.DELETE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ListReducer;
