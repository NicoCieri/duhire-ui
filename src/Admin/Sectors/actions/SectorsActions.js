import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_SECTORS,
  isLoading,
});

export const getSectors = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_SECTORS));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/sectors`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_SECTORS, 'sectors', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_SECTORS, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getSector = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_SECTOR));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/sectors/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_SECTOR, 'sector', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_SECTOR, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createSector = (sector, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_SECTOR));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}/sectors`, sector)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_SECTOR, 'sector', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_SECTOR, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editSector = (sector, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_SECTOR));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}/sectors`, sector)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_SECTOR, 'sector', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_SECTOR, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteSector = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_SECTOR));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/sectors/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_SECTOR, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_SECTOR, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (showSnackbar, snackbarMessage = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_SECTORS,
  showSnackbar,
  snackbarMessage,
});
