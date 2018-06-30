import React, { Component } from 'react';
import { bool, object } from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static propTypes = {
      history: object,
      authenticated: bool,
      router: object,
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        console.log('this.props.authenticated', this.props.authenticated);
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
