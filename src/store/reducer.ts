import { combineReducers } from 'redux';
import apiReducer from './mainStore.reducer';

// Combine reducers here

const rootReducer = combineReducers({
  // reducers go here
  api: apiReducer, // Name it 'api' instead of 'apiReducer'
});

export default rootReducer;