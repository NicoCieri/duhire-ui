import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Logo from '../../assets/DuHire.png';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'linear-gradient(45deg, #0288d1 0%, #26c6da 100%)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  logo: {
    width: '170px',
    marginTop: '5px',
  },
  rightTools: {
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
});

class Header extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {
      classes,
      handleSidebarOpen,
      open,
      signOutAction,
    } = this.props;
    const {
      anchorEl,
    } = this.state;

    const menuOpen = Boolean(anchorEl);

    return (
      <AppBar className={classNames(classes.appBar, open && classes.appBarShift)}>
        <Toolbar disableGutters={!open} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleSidebarOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            <img src={Logo} alt="DuHire logo" className={classes.logo} />
          </Typography>
          <div className={classes.rightTools}>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={menuOpen}
                onClose={this.handleClose}
              >
                <MenuItem onClick={signOutAction}>Cerrar sesión</MenuItem>
              </Menu>
            </div>
          </div>

        </Toolbar>
      </AppBar>
    );
  }
}

const {
  bool,
  func,
  object,
  // string,
} = PropTypes;

Header.propTypes = {
  classes: object.isRequired,
  // children: object,
  handleSidebarOpen: func.isRequired,
  open: bool.isRequired,
  signOutAction: func,
  // title: string,
};

export default withStyles(styles, { withTheme: true })(Header);
