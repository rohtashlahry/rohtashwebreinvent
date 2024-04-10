
import { Reducer } from 'redux';
import { apiRequest } from "./mainStore.action"
import { API_REQUEST, SET_USERDETAILS, SET_USER_TOKEN } from './mainStore.types';

const initialState: any = {
  data: null,
  loading: false,
  error: null,
  userDetails: {},
  userToken: ""
};

const apiReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    
    case API_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_USER_TOKEN:
        console.log("payload", action.payload)
      return {
        ...state,
        userToken: action.payload
      };

    default:
      return state;
  }
};

export default apiReducer;