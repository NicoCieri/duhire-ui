import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createABMReducer from './createABMReducer';
import AuthReducer from '../../Auth/reducers/AuthReducer';

export default combineReducers({
  areas: createABMReducer('area'),
  clients: createABMReducer('client'),
  companySizes: createABMReducer('companySize'),
  countries: createABMReducer('country', 'countries'),
  sectors: createABMReducer('sector'),
  search: createABMReducer('search'),
  searchRequests: createABMReducer('searchRequest'),
  searchRequestsAdmin: createABMReducer('searchRequest'),
  softSkills: createABMReducer('softSkill'),
  techSkills: createABMReducer('techSkill'),
  form: formReducer,
  auth: AuthReducer,
});
