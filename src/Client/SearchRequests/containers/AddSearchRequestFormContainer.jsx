import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddSearchRequestForm from '../components/AddSearchRequestForm';
import { createSearchRequest, toggleSnackbar } from '../actions/SearchRequestsActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  createSearchRequest,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddSearchRequestForm);
