import React, { Component } from 'react';
import { string, object } from 'prop-types';
import { TextField, FormControl, FormHelperText } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import { InputAdornment } from 'material-ui/Input';
import Chip from 'material-ui/Chip';
import Add from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    width: '100%',
    marginBottom: 20,
  },
  fullWidth: {
    width: '100%',
  },
  chip: {
    margin: '8px 8px 0px 0px',
  },
});

class ChipInput extends Component {
  static propTypes = {
    input: object,
    classes: object,
    meta: object,
    label: string,
  }

  state = {
    value: '',
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addChip();
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  addChip = () => {
    const { input: { value: chips, onChange } } = this.props;
    const { value: chip } = this.state;
    const chipExist = chips.find(t => t === chip);
    if (!chipExist && chip !== '') {
      onChange([
        chip,
        ...chips,
      ]);
    }
    this.setState({
      value: '',
    });
  }

  handleRemove = index => () => {
    const { input: { value: chips, onChange } } = this.props;
    onChange([
      ...chips.filter((chip, i) => i !== index),
    ]);
  }

  render() {
    const {
      label,
      classes,
      input: { value: chips = [] },
      meta: {
        touched,
        error,
      },
      ...custom
    } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <FormControl className={classes.fullWidth} error={touched && error && error !== ''}>
          <TextField
            label={label}
            error={touched && error && error !== ''}
            value={value}
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}

            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={this.addChip}
                  >
                    <Add />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...custom}
            className={classes.fullWidth}
          />
          {touched && error &&
            <FormHelperText className={styles.errorMessage}>{touched && error}</FormHelperText>
          }
          <div className={classes.fullWidth}>
            {chips.map((chip, index) => (
              <Chip
                key={index}
                label={chip}
                className={classes.chip}
                onDelete={this.handleRemove(index)}
              />
            ))}
          </div>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(ChipInput);
