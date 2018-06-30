import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_SOFTSKILLS,
  isLoading,
});

export const getSoftSkills = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_SOFTSKILLS));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/soft-skills`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_SOFTSKILLS, 'softSkills', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_SOFTSKILLS, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getSoftSkill = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_SOFTSKILL));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/soft-skills/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_SOFTSKILL, 'softSkill', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_SOFTSKILL, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createSoftSkill = (softSkill, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_SOFTSKILL));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}/soft-skills`, softSkill)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_SOFTSKILL, 'softSkill', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_SOFTSKILL, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editSoftSkill = (softSkill, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_SOFTSKILL));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}/soft-skills`, softSkill)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_SOFTSKILL, 'softSkill', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_SOFTSKILL, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteSoftSkill = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_SOFTSKILL));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/soft-skills/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_SOFTSKILL, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_SOFTSKILL, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (showSnackbar, snackbarMessage = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_SOFTSKILLS,
  showSnackbar,
  snackbarMessage,
});
