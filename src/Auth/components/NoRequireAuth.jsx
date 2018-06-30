import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, object } from 'prop-types';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    static propTypes = {
      router: object,
      authenticated: bool,
      history: object,
    }

    componentWillMount() {
      const { authenticated, history } = this.props;
      if (authenticated) {
        history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(NotAuthentication);
}
