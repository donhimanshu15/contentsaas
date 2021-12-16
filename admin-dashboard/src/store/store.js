import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  ContentsReducer,
  GetContentDetailsReducer
} from './reducers/contentReducer';

import addFileReducer from './reducers/formFileReducer';
import ListReducer from './reducers/ListReducer';
import {
  CampaignReducer,
  GetCampaignDetailsReducer
} from './reducers/campaignReducer';

const reducer = combineReducers({
  contents: ContentsReducer,
  content: GetContentDetailsReducer,
  files: addFileReducer,
  campaigns: CampaignReducer,
  campaign: GetCampaignDetailsReducer,
  lists: ListReducer
});

const gettingContentItemsFromStorage = sessionStorage.getItem('contentItems')
  ? JSON.parse(sessionStorage.getItem('contentItems'))
  : [];

const gettingFilesFromStorage = sessionStorage.getItem('fileItems')
  ? JSON.parse(sessionStorage.getItem('fileItems'))
  : [];

const gettingCampaignItemsFromStorage = sessionStorage.getItem('campaignItems')
  ? JSON.parse(sessionStorage.getItem('campaignItems'))
  : [];

const initialState = {
  contents: { contentItems: gettingContentItemsFromStorage },
  files: { fileItems: gettingFilesFromStorage },
  campaigns: { campaignItems: gettingCampaignItemsFromStorage }
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
