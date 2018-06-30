import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_COMPANYSIZES,
  isLoading,
});

export const getCompanySizes = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_COMPANYSIZES));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/company-sizes`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_COMPANYSIZES, 'companySizes', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_COMPANYSIZES, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getCompanySize = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_COMPANYSIZE));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/company-sizes/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_COMPANYSIZE, 'companySize', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_COMPANYSIZE, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createCompanySize = (companySize, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_COMPANYSIZE));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}/company-sizes`, companySize)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_COMPANYSIZE, 'companySize', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_COMPANYSIZE, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editCompanySize = (companySize, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_COMPANYSIZE));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}/company-sizes`, companySize)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_COMPANYSIZE, 'companySize', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_COMPANYSIZE, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteCompanySize = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_COMPANYSIZE));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/company-sizes/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_COMPANYSIZE, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_COMPANYSIZE, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (showSnackbar, snackbarMessage = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_COMPANYSIZES,
  showSnackbar,
  snackbarMessage,
});
