import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditAreaForm from '../components/EditAreaForm';
import { editArea, getArea, toggleSnackbar } from '../actions/AreasActions';

const mapStateToProps = ({ areas }) => ({
  area: areas.area,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editArea,
  getArea,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditAreaForm);
