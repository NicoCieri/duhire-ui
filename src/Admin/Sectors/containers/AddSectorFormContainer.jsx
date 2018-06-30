import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddSectorForm from '../components/AddSectorForm';
import { createSector, toggleSnackbar } from '../actions/SectorsActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  createSector,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddSectorForm);
