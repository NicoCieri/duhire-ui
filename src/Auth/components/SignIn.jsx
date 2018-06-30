import React, { Component } from 'react';
import { object, func, string } from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
// Shared
import Form from '../../shared/components/Form';
import ErrorAlert from '../../shared/components/ErrorAlert';
import Logo from '../../shared/assets/DuHire.png';
import { validateRequiredFields } from '../../shared/utils/formUtils';
import './SignIn.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
    background: theme.palette.primary.main,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    margin: 0,
  },
  paper: {
    padding: 12,
  },
  logo: {
    margin: '16px auto',
    display: 'block',
    maxWidth: '100%',
    width: 240,
  },
});

class SignIn extends Component {
  static propTypes = {
    classes: object,
    signInAction: func,
    history: object,
    errorMessage: string,
  };

  state = {
    showError: false,
  };

  componentWillReceiveProps({ errorMessage = '' }) {
    if (errorMessage !== '') {
      this.setState({ showError: true });
    }
  }

  fields = [{
    name: 'username',
    label: 'Email',
    size: 12,
  }, {
    name: 'password',
    label: 'Contraseña',
    size: 12,
    type: 'password',
  }];

  validate = validateRequiredFields(['user', 'password']);

  submit = (values) => {
    const { signInAction, history } = this.props;
    signInAction(values, history);
  }

  closeError = () => {
    this.setState({
      showError: false,
    });
  }

  errorMessage() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <div className="info-red">
          {errorMessage}
        </div>
      );
    }
    return null;
  }

  render() {
    const { classes, errorMessage } = this.props;
    const { showError } = this.state;
    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.container}
          justify="center"
          spacing={24}
        >
          <Grid item xs={10} md={4} xl={3} >
            {}
            <ErrorAlert
              error={errorMessage}
              show={showError}
              close={this.closeError}
            />
            <Form
              form="login"
              fields={this.fields}
              onSubmit={this.submit}
              title={<img src={Logo} className={classes.logo} alt="DuHire logo" />}
              validate={this.validate}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
