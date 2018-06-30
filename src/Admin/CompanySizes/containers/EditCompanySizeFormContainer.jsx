import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditCompanySizeForm from '../components/EditCompanySizeForm';
import { editCompanySize, getCompanySize, toggleSnackbar } from '../actions/CompanySizesActions';

const mapStateToProps = ({ companySizes }) => ({
  companySize: companySizes.companySize,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editCompanySize,
  getCompanySize,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditCompanySizeForm);
