import { createReducer, createSimpleActionMap } from '../utils/reduxHelpers';

// Reutilizes the same logic for multiple reducers
// First parameter is the data name, it is isRequired
// Second parameter is the name in plural, it is optional
// The names must be in camell case
export default function createABMReducer(dataType, dataTypePlural) {
  let dataNamePlural = `${dataType}s`;
  if (dataTypePlural) {
    dataNamePlural = dataTypePlural;
  }
  const dataTypeAction = dataType.toUpperCase();
  const dataTypeActionPlural = dataNamePlural.toUpperCase();

  const INITIAL_STATE = {
    [dataNamePlural]: [],
    [`${dataType}`]: {},
    isLoading: false,
    error: '',
    showSnackbar: false,
    snackbarMessage: '',
    showDeleteAreaModal: false,
  };

  return createReducer(INITIAL_STATE, {
    ...createSimpleActionMap([
      `REQUEST_GET_${dataTypeActionPlural}`,
      `RECEIVE_GET_${dataTypeActionPlural}`,
      `REQUEST_GET_${dataTypeAction}`,
      `RECEIVE_GET_${dataTypeAction}`,
      `REQUEST_ADD_NEW_${dataTypeAction}`,
      `REQUEST_REMOVE_${dataTypeAction}`,
      `TOGGLE_LOADING_${dataTypeActionPlural}`,
      `TOGGLE_SNACKBAR_${dataTypeActionPlural}`,
    ]),
    [`RECEIVE_ADD_NEW_${dataTypeAction}`]: (state, action) => ({
      [dataNamePlural]: [...state[dataNamePlural], action[`${dataType}`]],
    }),
    [`RECEIVE_REMOVE_${dataTypeAction}`]: (state, action) => ({
      [dataNamePlural]: state[dataNamePlural].filter(({ id }) => id !== action.id),
    }),
  });
}
