import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditSectorForm from '../components/EditSectorForm';
import { editSector, getSector, toggleSnackbar } from '../actions/SectorsActions';

const mapStateToProps = ({ sectors }) => ({
  sector: sectors.sector,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editSector,
  getSector,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditSectorForm);
