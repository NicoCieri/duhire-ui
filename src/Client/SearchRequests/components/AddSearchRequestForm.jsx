import React from 'react';
import { func, object } from 'prop-types';
import { Paper } from 'material-ui';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import { withStyles } from 'material-ui/styles';

import Form from '../../../shared/components/Form';
import GoBackLink from '../../../shared/components/GoBackLink';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

const styles = theme => ({
  paper: theme.mixins.gutters({
    // paddingTop: 16,
    // paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const AddSearchRequestForm = ({
  classes,
  createSearchRequest,
  history,
  toggleSnackbar,
}) => {
  const onSubmit = (values) => {
    createSearchRequest(values, () => {
      toggleSnackbar(true, 'Solicitud agregada correctamente');
      history.push('/search-requests');
    });
  };

  const cancel = () => {
    history.push('/search-requests');
  };

  const fields = [{
    name: 'name',
    label: 'Nombre',
    required: true,
    size: 4,
  }, {
    name: 'workMode',
    label: 'Modo de trabajo',
    required: true,
    size: 4,
  }, {
    name: 'workPlace',
    label: 'Lugar de trabajo',
    required: true,
    size: 4,
  }, {
    name: 'quantity',
    label: 'Vacantes',
    type: 'number',
    required: true,
    size: 4,
  }, {
    name: 'salaryFrom',
    label: 'Salario desde',
    type: 'number',
    required: true,
    size: 4,
  }, {
    name: 'salaryTo',
    label: 'Salario hasta',
    type: 'number',
    required: true,
    size: 4,
  }, {
    name: 'description',
    label: 'Descripción',
    multiline: true,
    required: true,
    size: 12,
  }];

  const validate = validateRequiredFields(['name', 'description']);

  const steps = [
    'Nos dices qué es lo que necesitas',
    'Nosotros armamos la búsqueda',
    'Tu búsqueda le llegará a los reclutadores!',
  ];

  return (
    <div>
      <GoBackLink to="/search-requests" />
      <h1>Solicitar nueva búsqueda</h1>
      <Paper className={classes.paper} elevation={4}>

        <Stepper activeStep={0}>
          {steps.map((label) => {
            const props = {};
            const labelProps = {};

            props.completed = false;
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Paper>

      <Form
        form="AddSearchRequestForm"
        mode="add"
        fields={fields}
        onSubmit={onSubmit}
        cancel={cancel}
        validate={validate}
      />
    </div>
  );
};

AddSearchRequestForm.propTypes = {
  classes: object,
  createSearchRequest: func,
  history: object,
  toggleSnackbar: func,
};

export default withStyles(styles)(AddSearchRequestForm);
