import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clients from '../components/Clients';
import { deleteClient, getClients, toggleSnackbar } from '../actions/ClientsActions';

const mapStateToProps = ({
  clients: {
    clients,
    isLoading,
    showSnackbar,
    snackbarMessage,
  },
}) => ({
  clients,
  isLoading,
  showSnackbar,
  snackbarMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getClients,
  deleteClient,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
