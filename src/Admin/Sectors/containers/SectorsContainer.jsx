import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sectors from '../components/Sectors';
import { deleteSector, getSectors, toggleSnackbar } from '../actions/SectorsActions';

const mapStateToProps = ({
  sectors: {
    sectors,
    isLoading,
    showSnackbar,
    snackbarMessage,
  },
}) => ({
  sectors,
  isLoading,
  showSnackbar,
  snackbarMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSectors,
  deleteSector,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sectors);
