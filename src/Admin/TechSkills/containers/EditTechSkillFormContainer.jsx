import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditTechSkillForm from '../components/EditTechSkillForm';
import { editTechSkill, getTechSkill, toggleSnackbar } from '../actions/TechSkillsActions';

const mapStateToProps = ({ techSkills }) => ({
  techSkill: techSkills.techSkill,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editTechSkill,
  getTechSkill,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditTechSkillForm);
