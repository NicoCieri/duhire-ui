import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_COUNTRIES,
  isLoading,
});

export const getCountries = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_COUNTRIES));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/countries`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_COUNTRIES, 'countries', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_COUNTRIES, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getCountry = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_COUNTRY));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/countries/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_COUNTRY, 'country', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_COUNTRY, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createCountry = (country, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_COUNTRY));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}/countries`, country)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_COUNTRY, 'country', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_COUNTRY, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editCountry = (country, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_COUNTRY));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}/countries`, country)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_COUNTRY, 'country', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_COUNTRY, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteCountry = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_COUNTRY));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/countries/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_COUNTRY, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_COUNTRY, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (show, message = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_COUNTRIES,
  show,
  message,
});
