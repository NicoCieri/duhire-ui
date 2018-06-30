import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import { signOutAction } from '../../../Auth/actions';

const mapDispatchToProps = dispatch => bindActionCreators({
  signOutAction,
}, dispatch);

export default connect(null, mapDispatchToProps)(Header);
