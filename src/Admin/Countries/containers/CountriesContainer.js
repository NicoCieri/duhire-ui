import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Countries from '../components/Countries';
import { deleteCountry, getCountries, toggleSnackbar } from '../actions/CountriesActions';

const mapStateToProps = ({
  countries: {
    countries,
    isLoading,
    showSnackbar,
    snackbarMessage,
  },
}) => ({
  countries,
  isLoading,
  showSnackbar,
  snackbarMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCountries,
  deleteCountry,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
