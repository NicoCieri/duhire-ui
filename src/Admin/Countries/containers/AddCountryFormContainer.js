import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddCountryForm from '../components/AddCountryForm';
import { createCountry, toggleSnackbar } from '../actions/CountriesActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  createCountry,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddCountryForm);
