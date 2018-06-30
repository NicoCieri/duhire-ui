import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateSearchForm from '../components/CreateSearchForm';
import { createSearch } from '../../Searchs/actions/SearchsActions';
import { getSearchRequest, toggleSnackbar } from '../actions/SearchRequestsActions';
import { getTechSkills } from '../../TechSkills/actions/TechSkillsActions';
import { getSoftSkills } from '../../SoftSkills/actions/SoftSkillsActions';

const mapStateToProps = ({ searchRequests, softSkills, techSkills }) => ({
  searchRequest: searchRequests.searchRequest,
  softSkills: softSkills.softSkills,
  techSkills: techSkills.techSkills,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createSearch,
  getSearchRequest,
  getTechSkills,
  getSoftSkills,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateSearchForm);
