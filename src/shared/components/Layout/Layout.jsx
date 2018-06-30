import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from 'material-ui-icons/Add';
import { Link } from 'react-router-dom';
import 'typeface-roboto';

import Sidebar from '../Sidebar';
import Header from '../Header';

const styles = theme => ({
  root: {
    width: '100%',
    // height: '100%',
    // marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    // height: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    // height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      // height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  button: {
    position: 'fixed',
    bottom: 16,
    right: 16,
    zIndex: 1,
  },
});

class Layout extends Component {
  state = {
    open: true,
  };

  handleSidebarOpen = () => {
    this.setState({ open: true });
  };

  handleSidebarClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Sidebar
            handleSidebarClose={this.handleSidebarClose}
            open={this.state.open}
          />
          <Header
            title="DuHire"
            handleSidebarOpen={this.handleSidebarOpen}
            open={this.state.open}
          />
          <main className={classes.content}>
            <div className={classes.container}>
              {children}
            </div>
            <Link to="/search-requests/new">
              <Tooltip id="tooltip-icon" title="Solicitar búsqueda" placement="left">
                <Button fab color="primary" aria-label="add" className={classes.button}>
                  <AddIcon />
                </Button>
              </Tooltip>
            </Link>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
