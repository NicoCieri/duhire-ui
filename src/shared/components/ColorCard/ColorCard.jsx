import React from 'react';
import { string, object } from 'prop-types';
import Card from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  blue: {
    background: 'linear-gradient(45deg, #0288d1 0%, #26c6da 100%)',
    color: '#FFF',
  },
  red: {
    background: 'linear-gradient(45deg, #FF5252 0%, #f48fb1 100%)',
    color: '#FFF',
  },
  yellow: {
    background: 'linear-gradient(45deg, #ff6f00 0%, #ffca28 100%)',
    color: '#FFF',
  },
  green: {
    background: 'linear-gradient(45deg, #43A047 0%, #1de9b6 100%)',
    color: '#FFF',
  },
});

const ColorCard = ({ classes, children, color }) => (
  <Card className={classes[color]}>
    {children}
  </Card>
);

ColorCard.propTypes = {
  classes: object,
  color: string.isRequired,
};

export default withStyles(styles)(ColorCard);
