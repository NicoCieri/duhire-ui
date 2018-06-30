import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_AREAS,
  isLoading,
});

export const getAreas = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_AREAS));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/areas`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_AREAS, 'areas', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_AREAS, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getArea = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_AREA));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/areas/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_AREA, 'area', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_AREA, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createArea = (area, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_AREA));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}/areas`, area)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_AREA, 'area', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_AREA, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editArea = (area, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_AREA));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}/areas`, area)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_AREA, 'area', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_AREA, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteArea = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_AREA));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/areas/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_AREA, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_AREA, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (showSnackbar, snackbarMessage = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_AREAS,
  showSnackbar,
  snackbarMessage,
});
