import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddAreaForm from '../components/AddAreaForm';
import { createArea, toggleSnackbar } from '../actions/AreasActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  createArea,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddAreaForm);
