import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditCountryForm from '../components/EditCountryForm';
import { editCountry, getCountry, toggleSnackbar } from '../actions/CountriesActions';

const mapStateToProps = ({ countries }) => ({
  country: countries.country,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editCountry,
  getCountry,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditCountryForm);
