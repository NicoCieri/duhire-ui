import React from 'react';
import { bool, func, string, object } from 'prop-types';
// Material UI
import Card, { CardContent } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import { withStyles } from 'material-ui/styles';

const styles = {
  card: {
    minWidth: 275,
    background: '#d0432c',
    position: 'relative',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    color: '#FFF',
    fontSize: 16,
  },
  errors: {
    color: '#FFF',
  },
  closeButton: {
    color: '#FFF',
    background: '#d0432c',
    width: 40,
    height: 40,
    borderRadius: '100%',
    position: 'absolute',
    top: -18,
    left: -18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .3s',
    '&:hover': {
      background: '#e0482f',
    },
  },
  icon: {
    width: 20,
  },
};

const ErrorAlert = ({
  classes,
  error,
  close,
  show,
}) => (
  <div>
    {show && error && error !== '' &&
      <Card className={classes.card}>
        <CardContent>
          {/* <Typography variant="headline" component="h2" className={classes.title}>
            Errors
          </Typography> */}
          <Typography component="p" className={classes.errors}>{error}</Typography>
        </CardContent>
        <Paper elevation={6} className={classes.closeButton} onClick={close}>
          <CloseIcon className={classes.icon} />
        </Paper>
      </Card>
    }
  </div>
);

ErrorAlert.propTypes = {
  classes: object.isRequired,
  error: string,
  close: func,
  show: bool,
};

export default withStyles(styles)(ErrorAlert);
