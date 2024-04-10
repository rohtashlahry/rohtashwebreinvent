import { API_REQUEST, SET_USERDETAILS, SET_USER_TOKEN } from './mainStore.types';

export const apiRequest = (data: any) => {
    return {
        type: API_REQUEST,
        payload: data
    }
};

export const setUserDetails = (data: any) => {
    return {
        type: SET_USERDETAILS,
        payload: data
    }
};

export const setUserToken = (data: any) => {
    return {
        type: SET_USER_TOKEN,
        payload: data
    }
};
