import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ViewSearchRequestForm from '../components/ViewSearchRequestForm';
import { editSearchRequest, getSearchRequest, toggleSnackbar } from '../actions/SearchRequestsActions';

const mapStateToProps = ({ searchRequests }) => ({
  searchRequest: searchRequests.searchRequest,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editSearchRequest,
  getSearchRequest,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewSearchRequestForm);
