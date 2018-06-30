import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompanySizes from '../components/CompanySizes';
import { deleteCompanySize, getCompanySizes, toggleSnackbar } from '../actions/CompanySizesActions';

const mapStateToProps = ({
  companySizes: {
    companySizes,
    isLoading,
    showSnackbar,
    snackbarMessage,
  },
}) => ({
  companySizes,
  isLoading,
  showSnackbar,
  snackbarMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCompanySizes,
  deleteCompanySize,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CompanySizes);
