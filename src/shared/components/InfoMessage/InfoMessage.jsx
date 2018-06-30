import React from 'react';
import { bool, func, object, string } from 'prop-types';
import { Snackbar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

const InfoMessage = ({
  classes,
  onClose,
  open,
  message,
}) => (
  <Snackbar
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
    }}
    open={open}
    autoHideDuration={6000}
    onClose={onClose}
    message={<span id="message-id">{message}</span>}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.close}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>,
    ]}
  />
);

InfoMessage.propTypes = {
  classes: object,
  onClose: func,
  open: bool,
  message: string,
};

export default withStyles(styles)(InfoMessage);
