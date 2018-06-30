import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddClientForm from '../components/AddClientForm';
import { createClient, toggleSnackbar } from '../actions/ClientsActions';
import { getSectors } from '../../Sectors/actions/SectorsActions';
import { getCompanySizes } from '../../CompanySizes/actions/CompanySizesActions';

const mapStateToProps = ({
  sectors: { sectors },
  companySizes: { companySizes },
}) => ({ sectors, companySizes });

const mapDispatchToProps = dispatch => bindActionCreators({
  createClient,
  getCompanySizes,
  getSectors,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddClientForm);
