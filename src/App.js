import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Layout from './shared/components/Layout';
import reducers from './shared/reducers';
import { AUTHENTICATED } from './Auth/actions';
// Pages
import Home from './Home/containers/HomeContainer';
import SignIn from './Auth';
// Areas
import Areas from './Admin/Areas/containers/AreasContainer';
import AddAreaForm from './Admin/Areas/containers/AddAreaFormContainer';
import EditAreaForm from './Admin/Areas/containers/EditAreaFormContainer';
// CompanySizes
import CompanySizes from './Admin/CompanySizes/containers/CompanySizesContainer';
import AddCompanySizeForm from './Admin/CompanySizes/containers/AddCompanySizeFormContainer';
import EditCompanySizeForm from './Admin/CompanySizes/containers/EditCompanySizeFormContainer';
// Countries
import Countries from './Admin/Countries/containers/CountriesContainer';
import AddCountryForm from './Admin/Countries/containers/AddCountryFormContainer';
import EditCountryForm from './Admin/Countries/containers/EditCountryFormContainer';
// Tech skills
import TechSkills from './Admin/TechSkills/containers/TechSkillsContainer';
import AddTechSkillForm from './Admin/TechSkills/containers/AddTechSkillFormContainer';
import EditTechSkillForm from './Admin/TechSkills/containers/EditTechSkillFormContainer';
// Soft skills
import SoftSkills from './Admin/SoftSkills/containers/SoftSkillsContainer';
import AddSoftSkillForm from './Admin/SoftSkills/containers/AddSoftSkillFormContainer';
import EditSoftSkillForm from './Admin/SoftSkills/containers/EditSoftSkillFormContainer';
// Clients
import Clients from './Admin/Clients/containers/ClientsContainer';
import AddClientForm from './Admin/Clients/containers/AddClientFormContainer';
import EditClientForm from './Admin/Clients/containers/EditClientFormContainer';
// Sectors
import Sectors from './Admin/Sectors/containers/SectorsContainer';
import AddSectorForm from './Admin/Sectors/containers/AddSectorFormContainer';
import EditSectorForm from './Admin/Sectors/containers/EditSectorFormContainer';
// Search Requests admin
import SearchRequestsAdmin from './Admin/SearchRequests/containers/SearchRequestsContainer';
import CreateSearchForm from './Admin/SearchRequests/containers/CreateSearchFormContainer';
// Search Requests clients
import SearchRequests from './Client/SearchRequests/containers/SearchRequestsContainer';
import AddSearchRequestForm from './Client/SearchRequests/containers/AddSearchRequestFormContainer';
import ViewSearchRequestForm from './Client/SearchRequests/containers/ViewSearchRequestFormContainer';
// Jobs
import JobDetail from './Client/Jobs/components/JobDetail';

// Auth HOC
import RequireAuth from './Auth/components/RequireAuth';
import NoRequireAuth from './Auth/components/NoRequireAuth';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#03b4f0',
      // main: '#00bcd4',
      contrastText: '#FFFFFF',
    },
    secondary: { main: '#fa8001' },
  },
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleWare];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

const applyLayout = Page => props => (
  <Layout>
    <Page {...props} />
  </Layout>
);

const user = localStorage.getItem('user');

if (user) {
  store.dispatch({ type: AUTHENTICATED });
}

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={applyLayout(RequireAuth(Home))} />
          <Route exact path="/signin" component={NoRequireAuth(SignIn)} />
          {/* Admin */}
          <Route exact path="/admin/areas" render={applyLayout(RequireAuth(Areas))} />
          <Route exact path="/admin/areas/new" render={applyLayout(RequireAuth(AddAreaForm))} />
          <Route exact path="/admin/areas/edit/:id" render={applyLayout(RequireAuth(EditAreaForm))} />
          <Route exact path="/admin/company-sizes" render={applyLayout(RequireAuth(CompanySizes))} />
          <Route exact path="/admin/company-sizes/new" render={applyLayout(RequireAuth(AddCompanySizeForm))} />
          <Route exact path="/admin/company-sizes/edit/:id" render={applyLayout(RequireAuth(EditCompanySizeForm))} />
          <Route exact path="/admin/countries" render={applyLayout(RequireAuth(Countries))} />
          <Route exact path="/admin/countries/new" render={applyLayout(RequireAuth(AddCountryForm))} />
          <Route exact path="/admin/countries/edit/:id" render={applyLayout(RequireAuth(EditCountryForm))} />
          <Route exact path="/admin/tech-skills" render={applyLayout(RequireAuth(TechSkills))} />
          <Route exact path="/admin/tech-skills/new" render={applyLayout(RequireAuth(AddTechSkillForm))} />
          <Route exact path="/admin/tech-skills/edit/:id" render={applyLayout(RequireAuth(EditTechSkillForm))} />
          <Route exact path="/admin/soft-skills" render={applyLayout(RequireAuth(SoftSkills))} />
          <Route exact path="/admin/soft-skills/new" render={applyLayout(RequireAuth(AddSoftSkillForm))} />
          <Route exact path="/admin/soft-skills/edit/:id" render={applyLayout(RequireAuth(EditSoftSkillForm))} />
          <Route exact path="/admin/clients" render={applyLayout(RequireAuth(Clients))} />
          <Route exact path="/admin/clients/new" render={applyLayout(RequireAuth(AddClientForm))} />
          <Route exact path="/admin/clients/edit/:id" render={applyLayout(RequireAuth(EditClientForm))} />
          <Route exact path="/admin/sectors" render={applyLayout(RequireAuth(Sectors))} />
          <Route exact path="/admin/sectors/new" render={applyLayout(RequireAuth(AddSectorForm))} />
          <Route exact path="/admin/sectors/edit/:id" render={applyLayout(RequireAuth(EditSectorForm))} />
          <Route exact path="/admin/search-requests" render={applyLayout(RequireAuth(SearchRequestsAdmin))} />
          <Route exact path="/admin/search-requests/:id" render={applyLayout(RequireAuth(CreateSearchForm))} />
          {/* Clients */}
          <Route exact path="/search-requests" render={applyLayout(RequireAuth(SearchRequests))} />
          <Route exact path="/search-requests/new" render={applyLayout(RequireAuth(AddSearchRequestForm))} />
          <Route exact path="/search-requests/:id" render={applyLayout(RequireAuth(ViewSearchRequestForm))} />
          <Route exact path="/jobs/:id" render={applyLayout(RequireAuth(JobDetail))} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

export default App;
