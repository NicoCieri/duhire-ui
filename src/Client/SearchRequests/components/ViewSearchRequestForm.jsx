import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { Paper } from 'material-ui';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import { withStyles } from 'material-ui/styles';

import Form from '../../../shared/components/Form';
import GoBackLink from '../../../shared/components/GoBackLink';

const styles = theme => ({
  paper: theme.mixins.gutters({
    // paddingTop: 16,
    // paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class ViewSearchRequestForm extends Component {
  fields = [{
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

  componentDidMount() {
    const { getSearchRequest, match } = this.props;
    getSearchRequest(match.params.id);
  }

  cancel = () => {
    const { history } = this.props;
    history.push('/search-requests');
  }

  onSubmit = () => {
    const { history } = this.props;
    history.push('/search-requests');
  };

  render() {
    const {
      classes,
      searchRequest,
    } = this.props;

    const steps = [
      'Nos dices qué es lo que necesitas',
      'Nosotros armamos la búsqueda',
      'Tu búsqueda le llegará a los reclutadores!',
    ];

    return (
      <div>
        <GoBackLink to="/search-requests" />
        <h1>Mi solicitud de búsqueda</h1>
        <p>No puedes editar una solicitud ya creada. </p>
        <Paper className={classes.paper} elevation={4}>

          <Stepper activeStep={1}>
            {steps.map((label, index) => {
              const props = {};
              const labelProps = {};

              props.completed = index === 0;
              return (
                <Step key={label} {...props}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Paper>

        <Form
          form="ViewSearchRequestForm"
          mode="edit"
          fields={this.fields}
          cancel={this.cancel}
          cancelButtonText="Cancelar búsqueda"
          onSubmit={this.onSubmit}
          initialValues={searchRequest}
          viewOnly
        />
      </div>
    );
  }
}

ViewSearchRequestForm.propTypes = {
  classes: object,
  createSearchRequest: func,
  history: object,
  toggleSnackbar: func,
};

export default withStyles(styles)(ViewSearchRequestForm);
