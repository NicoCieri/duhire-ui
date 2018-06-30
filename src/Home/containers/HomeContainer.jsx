import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import { getSearchRequests } from '../../Client/SearchRequests/actions/SearchRequestsActions';

const mapStateToProps = ({
  searchRequests: {
    searchRequests,
  },
}) => ({
  searchRequests,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSearchRequests,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
