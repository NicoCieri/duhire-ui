import axios from 'axios';
import { request, receive, error } from '../../../shared/actions/BaseActions';
import { BASE_URL } from '../../../shared/utils/utils';

import * as ActionTypes from './ActionTypes';

const API_URL = `${BASE_URL}/api`;

export const toggleIsLoading = isLoading => ({
  type: ActionTypes.TOGGLE_LOADING_TECHSKILLS,
  isLoading,
});

export const getTechSkills = () => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_TECHSKILLS));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/tech-skills`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_TECHSKILLS, 'techSkills', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_TECHSKILLS, e));
      dispatch(toggleIsLoading(false));
    });
};

export const getTechSkill = id => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_GET_TECHSKILL));
  dispatch(toggleIsLoading(true));
  return axios
    .get(`${API_URL}/tech-skills/${id}`)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_GET_TECHSKILL, 'techSkill', response.data));
      dispatch(toggleIsLoading(false));
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_GET_TECHSKILL, e));
      dispatch(toggleIsLoading(false));
    });
};

export const createTechSkill = (techSkill, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_ADD_NEW_TECHSKILL));
  dispatch(toggleIsLoading(true));
  return axios
    .post(`${API_URL}/tech-skills`, techSkill)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_ADD_NEW_TECHSKILL, 'techSkill', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_ADD_NEW_TECHSKILL, e));
      dispatch(toggleIsLoading(false));
    });
};

export const editTechSkill = (techSkill, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_EDIT_TECHSKILL));
  dispatch(toggleIsLoading(true));
  return axios
    .put(`${API_URL}/tech-skills`, techSkill)
    .then((response) => {
      dispatch(receive(ActionTypes.RECEIVE_EDIT_TECHSKILL, 'techSkill', response.data));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_EDIT_TECHSKILL, e));
      dispatch(toggleIsLoading(false));
    });
};

export const deleteTechSkill = (id, callback) => (dispatch) => {
  dispatch(request(ActionTypes.REQUEST_REMOVE_TECHSKILL));
  dispatch(toggleIsLoading(true));
  return axios
    .delete(`${API_URL}/tech-skills/${id}`)
    .then(() => {
      dispatch(receive(ActionTypes.RECEIVE_REMOVE_TECHSKILL, 'id', id));
      dispatch(toggleIsLoading(false));
      if (callback) {
        callback();
      }
    })
    .catch((e) => {
      dispatch(error(ActionTypes.ERROR_REMOVE_TECHSKILL, e));
      dispatch(toggleIsLoading(false));
    });
};

export const toggleSnackbar = (showSnackbar, snackbarMessage = '') => ({
  type: ActionTypes.TOGGLE_SNACKBAR_TECHSKILLS,
  showSnackbar,
  snackbarMessage,
});
