import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddTechSkillForm from '../components/AddTechSkillForm';
import { createTechSkill, toggleSnackbar } from '../actions/TechSkillsActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  createTechSkill,
  toggleSnackbar,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddTechSkillForm);
