import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditSoftSkillForm from '../components/EditSoftSkillForm';
import { editSoftSkill, getSoftSkill, toggleSnackbar } from '../actions/SoftSkillsActions';

const mapStateToProps = ({ softSkills }) => ({
  softSkill: softSkills.softSkill,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editSoftSkill,
  getSoftSkill,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditSoftSkillForm);
