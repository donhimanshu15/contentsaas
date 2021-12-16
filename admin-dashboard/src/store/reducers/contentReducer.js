import * as types from '../constants';
/* eslint no-underscore-dangle: 0 */
export const ContentsReducer = (state = { contentItems: [] }, action) => {
  switch (action.type) {
    // create content cases
    case types.CREATE_CONTENT: {
      const item = action.payload;
      const existContent = state.contentItems.find((x) => x._id === item._id);

      if (existContent) {
        return {
          ...state,
          contentItems: state.contentItems.map((x) => (x._id === existContent._id ? item : x)),
          error: null,
          success: 'Content created succssfully'
        };
      }
      return {
        ...state,
        contentItems: [...state.contentItems, item],
        error: null,
        success: 'Content created succssfully'
      };
    }

    case types.CREATE_CONTENT_FAIL:
      return { loading: false, error: action.payload };

    // get content cases
    case types.GET_CONTENT:
      return { loading: false, contentItems: action.payload, error: null };
    case types.GET_CONTENT_FAIL:
      return { loading: false, error: action.payload };

    // delete content cases
    case types.DELETE_CONTENT:
      return {
        ...state,
        contentItems: state.contentItems.filter(
          (x) => x._id !== action.payload
        ),
        error: null,
        success: 'Content deleted succssfully'
      };
    case types.DELETE_CONTENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const GetContentDetailsReducer = (
  state = { contentDetail: {} },
  action
) => {
  switch (action.type) {
    case types.GET_CONTENT_DETAILS:
      return { contentDetail: action.payload, error: null };
    case types.GET_CONTENT_DETAILS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
