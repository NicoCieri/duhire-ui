import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_CLIENTS,
  isLoading,
});

export const getClients = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_CLIENTS));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/clients`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_CLIENTS, 'clients', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_CLIENTS, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getClient = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_CLIENT));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/clients/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_CLIENT, 'client', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_CLIENT, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createClient = (client, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_CLIENT));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}/clients`, client)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_CLIENT, 'client', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_CLIENT, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editClient = (client, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_CLIENT));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}/clients`, client)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_CLIENT, 'client', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_CLIENT, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteClient = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_CLIENT));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/clients/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_CLIENT, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_CLIENT, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (showSnackbar, snackbarMessage = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_CLIENTS,
  showSnackbar,
  snackbarMessage,
});
