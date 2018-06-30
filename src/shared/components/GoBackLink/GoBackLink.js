import React from 'react';
import { string, object } from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';

const styles = () => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    top: '-6px',
    marginLeft: '-16px',
  },
});

const GoBackLink = ({ classes, to }) => (
  <Link to={to} className={classes.root}>
    <IconButton>
      <ArrowBackIcon />
    </IconButton>
  </Link>
);

GoBackLink.propTypes = {
  classes: object,
  to: string.isRequired,
};

export default withStyles(styles)(GoBackLink);
