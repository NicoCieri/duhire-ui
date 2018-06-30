import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api/admin/search`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_SEARCHS,
  isLoading,
});

export const getSearchs = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_SEARCHS));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_SEARCHS, 'searchs', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_SEARCHS, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getSearch = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_SEARCH));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_SEARCH, 'search', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_SEARCH, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createSearch = (search, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_SEARCH));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}`, search)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_SEARCH, 'search', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_SEARCH, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editSearch = (search, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_SEARCH));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}`, search)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_SEARCH, 'search', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_SEARCH, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteSearch = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_SEARCH));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_SEARCH, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_SEARCH, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (showSnackbar, snackbarMessage = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_SEARCHS,
  showSnackbar,
  snackbarMessage,
});
