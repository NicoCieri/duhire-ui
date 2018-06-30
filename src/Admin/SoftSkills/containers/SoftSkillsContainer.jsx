import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SoftSkills from '../components/SoftSkills';
import { deleteSoftSkill, getSoftSkills, toggleSnackbar } from '../actions/SoftSkillsActions';

const mapStateToProps = ({
  softSkills: {
    softSkills,
    isLoading,
    showSnackbar,
    snackbarMessage,
  },
}) => ({
  softSkills,
  isLoading,
  showSnackbar,
  snackbarMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSoftSkills,
  deleteSoftSkill,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SoftSkills);
