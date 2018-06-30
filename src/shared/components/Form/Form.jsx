import React, { Component } from 'react';
import { array, bool, func, object, string, oneOfType } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Grid, Paper, TextField, FormControl, FormHelperText } from 'material-ui';
import SendIcon from 'material-ui-icons/Send';
import { withStyles } from 'material-ui/styles';
import Select from 'react-select';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    flexGrow: 1,
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  formControl: {
    width: '100%',
    boxSizing: 'border-box',
  },
  selectFormControl: {
    position: 'relative',
    top: 8,
  },
  errorMessage: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
});

class Form extends Component {
  static propTypes = {
    cancel: func,
    classes: object,
    handleSubmit: func,
    mode: string,
    onSubmit: func,
    fields: array,
    goBackTo: string,
    viewOnly: bool,
    noButtons: bool,
    cancelButtonText: string,
    okButtonText: string,
    title: oneOfType([string, object]),
  };

  renderField = ({
    input,
    label,
    value,
    meta: { touched, error },
    ...custom
  }) => {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl} error={touched && error && error !== ''}>
        <TextField
          label={label}
          error={touched && error && error !== ''}
          className={classes.textField}
          value={value}
          {...input}
          {...custom}
        />
        {touched && error &&
          <FormHelperText className={styles.errorMessage}>{touched && error}</FormHelperText>
        }
      </FormControl>
    );
  };

  // renderDropdown = ({
  //   input,
  //   label,
  //   value,
  //   meta: { touched, error },
  //   onChange,
  //   ...custom
  // }) => {
  //   const { classes } = this.props;
  //   return (
  //     <FormControl className={classes.formControl} error={touched && error && error !== ''}>
  //       <InputLabel>{label}</InputLabel>
  //       <Select
  //         native
  //         {...input}
  //         {...custom}
  //         onChange={event => input.onChange(event)}
  //       >
  //         <option value="" />
  //         {custom.options.map(option => (
  //           <option key={option.id} value={option.id}>{option.name}</option>
  //         ))}
  //       </Select>
  //       <FormHelperText className={styles.errorMessage}>{touched && error}</FormHelperText>
  //     </FormControl>
  //   );
  // };

  renderDropdown = ({
    input,
    label,
    options,
    meta: { touched, error },
    multiple,
  }) => {
    const { classes } = this.props;
    return (
      <FormControl
        className={`${classes.formControl} ${classes.selectFormControl}`}
        error={touched && error && error !== ''}
      >
        <Select
          {...input}
          value={input.value}
          onChange={input.onChange}
          onBlur={() => input.onBlur(multiple ? [...input.value] : input.value)}
          options={options}
          placeholder={label}
          isMulti={multiple}
          defaultValue={input.value}
        />
        <FormHelperText className={styles.errorMessage}>{touched && error}</FormHelperText>
      </FormControl>
    );
  }

  render() {
    const {
      cancel,
      classes,
      handleSubmit,
      mode,
      onSubmit,
      fields,
      title,
      viewOnly,
      noButtons,
      okButtonText,
      cancelButtonText,
    } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          {title}
          <form
            className={classes.container}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            noValidate
          >
            <Grid container spacing={24}>
              {
                fields.map(({
                  dropdown,
                  multiple,
                  label,
                  name,
                  size,
                  noEditable,
                  options = [],
                  customComponent,
                  ...custom
                }) => {
                  let component;
                  if (customComponent) {
                    component = customComponent;
                  } else if (dropdown) {
                    component = this.renderDropdown;
                  } else {
                    component = this.renderField;
                  }
                  return (
                    <Grid item xs={12} sm={size} key={name}>
                      <Field
                        name={name}
                        label={label}
                        disabled={(mode === 'edit' && noEditable) || viewOnly}
                        mode={mode}
                        component={component}
                        options={options}
                        multiple={multiple}
                        {...custom}
                      />
                    </Grid>
                  );
                })
              }
              {!noButtons &&
                <Grid item xs={12} className={classes.buttonWrapper}>
                  {viewOnly &&
                    <Button className={classes.button} onClick={cancel}>
                      Volver
                    </Button>
                  }
                  {cancel &&
                    <Button className={classes.button} onClick={cancel}>
                      {cancelButtonText || 'Cancelar'}
                    </Button>
                  }
                  {!viewOnly &&
                    <Button className={classes.button} raised color="primary" type="submit">
                      {okButtonText || 'Enviar'}
                      <SendIcon className={classes.rightIcon} />
                    </Button>
                  }
                </Grid>}
            </Grid>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(reduxForm({
  enableReinitialize: true,
})(Form));
