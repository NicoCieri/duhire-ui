import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddSoftSkillForm from '../components/AddSoftSkillForm';
import { createSoftSkill, toggleSnackbar } from '../actions/SoftSkillsActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  createSoftSkill,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddSoftSkillForm);
