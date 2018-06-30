import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TechSkills from '../components/TechSkills';
import { deleteTechSkill, getTechSkills, toggleSnackbar } from '../actions/TechSkillsActions';

const mapStateToProps = ({
  techSkills: {
    techSkills,
    isLoading,
    showSnackbar,
    snackbarMessage,
  },
}) => ({
  techSkills,
  isLoading,
  showSnackbar,
  snackbarMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTechSkills,
  deleteTechSkill,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TechSkills);
