import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddCompanySizeForm from '../components/AddCompanySizeForm';
import { createCompanySize, toggleSnackbar } from '../actions/CompanySizesActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  createCompanySize,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddCompanySizeForm);
