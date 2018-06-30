import {
  AUTHENTICATING,
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true, error: '' };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case AUTHENTICATING:
      return { ...state, error: '' };
    default:
      return state;
  }
}
