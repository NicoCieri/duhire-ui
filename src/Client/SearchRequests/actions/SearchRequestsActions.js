import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api/client/search-request`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_SEARCHREQUESTS,
  isLoading,
});

export const getSearchRequests = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_SEARCHREQUESTS));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_SEARCHREQUESTS, 'searchRequests', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_SEARCHREQUESTS, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getSearchRequest = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_SEARCHREQUEST));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_SEARCHREQUEST, 'searchRequest', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_SEARCHREQUEST, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createSearchRequest = (searchRequest, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_SEARCHREQUEST));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}`, searchRequest)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_SEARCHREQUEST, 'searchRequest', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_SEARCHREQUEST, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editSearchRequest = (searchRequest, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_SEARCHREQUEST));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}`, searchRequest)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_SEARCHREQUEST, 'searchRequest', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_SEARCHREQUEST, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteSearchRequest = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_SEARCHREQUEST));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_SEARCHREQUEST, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_SEARCHREQUEST, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (showSnackbar, snackbarMessage = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_SEARCHREQUESTS,
  showSnackbar,
  snackbarMessage,
});
