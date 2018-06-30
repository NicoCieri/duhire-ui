import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../components/SignIn';
import { signInAction } from '../actions';

const mapStateToProps = ({
  auth: { error },
}) => ({
  errorMessage: error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signInAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
