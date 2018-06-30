import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Areas from '../components/Areas';
import { deleteArea, getAreas, toggleSnackbar } from '../actions/AreasActions';

const mapStateToProps = ({
  areas: {
    areas,
    isLoading,
    showSnackbar,
    snackbarMessage,
  },
}) => ({
  areas,
  isLoading,
  showSnackbar,
  snackbarMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAreas,
  deleteArea,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Areas);
