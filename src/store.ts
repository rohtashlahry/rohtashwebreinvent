import { createStore, combineReducers } from 'redux';
import apiReducer from './store/mainStore.reducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  api: apiReducer
  // Other reducers can be added here
});

const store = createStore(rootReducer);

export default store;