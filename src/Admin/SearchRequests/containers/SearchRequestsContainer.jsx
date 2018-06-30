import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchRequests from '../components/SearchRequests';
import { deleteSearchRequest, getSearchRequests, toggleSnackbar } from '../actions/SearchRequestsActions';

const mapStateToProps = ({
  searchRequestsAdmin: {
    searchRequests,
    isLoading,
    showSnackbar,
    snackbarMessage,
  },
}) => ({
  searchRequests,
  isLoading,
  showSnackbar,
  snackbarMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSearchRequests,
  deleteSearchRequest,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchRequests);
