import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditClientForm from '../components/EditClientForm';
import { editClient, getClient, toggleSnackbar } from '../actions/ClientsActions';
import { getSectors } from '../../Sectors/actions/SectorsActions';
import { getCompanySizes } from '../../CompanySizes/actions/CompanySizesActions';

const mapStateToProps = ({
  clients: { client },
  sectors: { sectors },
  companySizes: { companySizes },
}) => ({
  client,
  companySizes,
  sectors,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editClient,
  getClient,
  getCompanySizes,
  getSectors,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditClientForm);
