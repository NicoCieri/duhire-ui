import React, { Component } from 'react';
import { array, func, object } from 'prop-types';
import { Grid } from 'material-ui';
import Card, { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

import Form from '../../../shared/components/Form';
import GoBackLink from '../../../shared/components/GoBackLink';
import ChipInput from '../../../shared/components/ChipInput';
import { validateRequiredFields, toSelectFormat } from '../../../shared/utils/formUtils';

const styles = theme => ({
  paper: theme.mixins.gutters({
    // paddingTop: 16,
    // paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  header: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

class CreateSearchForm extends Component {
  componentDidMount() {
    const {
      getSearchRequest,
      getSoftSkills,
      getTechSkills,
      match,
    } = this.props;
    getSearchRequest(match.params.id);
    getSoftSkills();
    getTechSkills();
  }

  onSubmit = (values) => {
    const { createSearch, history, toggleSnackbar } = this.props;
    const newValues = {
      ...values,
      techSkills: values.techSkills.map(({ value }) => value),
      softSkills: values.techSkills.map(({ value }) => value),
    };
    createSearch(newValues, () => {
      toggleSnackbar(true, 'Búsqueda creada correctamente');
      history.push('/admin/search-requests');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/search-requests');
  }

  render() {
    const {
      searchRequest,
      classes,
      techSkills,
      softSkills,
    } = this.props;

    const createInitialData = {
      ...searchRequest,
      softSkills: [],
      techSkills: [],
      benefits: [],
    };

    const readOnlyFields = [{
      name: 'name',
      label: 'Nombre',
      required: true,
      size: 12,
    }, {
      name: 'workMode',
      label: 'Modo de trabajo',
      required: true,
      size: 12,
    }, {
      name: 'workPlace',
      label: 'Lugar de trabajo',
      required: true,
      size: 12,
    }, {
      name: 'quantity',
      label: 'Vacantes',
      type: 'number',
      required: true,
      size: 12,
    }, {
      name: 'salaryFrom',
      label: 'Salario desde',
      type: 'number',
      required: true,
      size: 12,
    }, {
      name: 'salaryTo',
      label: 'Salario hasta',
      type: 'number',
      required: true,
      size: 12,
    }, {
      name: 'description',
      label: 'Descripción',
      multiline: true,
      required: true,
      size: 12,
    }];

    const fields = [{
      name: 'name',
      label: 'Nombre',
      required: true,
      size: 6,
    }, {
      name: 'workMode',
      label: 'Modo de trabajo',
      required: true,
      size: 6,
    }, {
      name: 'workPlace',
      label: 'Lugar de trabajo',
      required: true,
      size: 6,
    }, {
      name: 'quantity',
      label: 'Vacantes',
      type: 'number',
      required: true,
      size: 6,
    }, {
      name: 'salaryFrom',
      label: 'Salario desde',
      type: 'number',
      required: true,
      size: 6,
    }, {
      name: 'salaryTo',
      label: 'Salario hasta',
      type: 'number',
      required: true,
      size: 6,
    }, {
      name: 'techSkills',
      label: 'Tech Skills',
      dropdown: true,
      options: techSkills.map(toSelectFormat),
      required: true,
      multiple: true,
      size: 6,
    }, {
      name: 'softSkills',
      label: 'Soft Skills',
      dropdown: true,
      options: softSkills.map(toSelectFormat),
      required: true,
      multiple: true,
      size: 6,
    }, {
      name: 'benefits',
      label: 'Beneficios',
      size: 12,
      customComponent: ChipInput,
      required: true,
    }, {
      name: 'description',
      label: 'Descripción',
      multiline: true,
      required: true,
      size: 12,
    }];

    const validate = validateRequiredFields(fields
      .filter(f => f.required)
      .map(f => f.name));

    return (
      <div>
        <GoBackLink to="/admin/search-requests" />
        <h1>Completar solicitud</h1>

        <Grid container spacing={24}>
          <Grid item xs={12} sm={8}>
            <Form
              form="CreateSearchForm"
              mode="edit"
              fields={fields}
              cancel={this.cancel}
              cancelButtonText="Rechazar"
              onSubmit={this.onSubmit}
              initialValues={createInitialData}
              validate={validate}
              okButtonText="Crear búsqueda"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.paper}>
              <CardHeader
                className={classes.header}
                avatar={
                  <Avatar aria-label="Recipe" className={styles.avatar}>
                    R
                  </Avatar>
                }
                title="Nombre del ciente"
                subheader="September 14, 2016"
              />
            </Card>
            <Form
              form="ViewSearchForm"
              mode="edit"
              fields={readOnlyFields}
              onSubmit={this.onSubmit}
              initialValues={searchRequest}
              viewOnly
              noButtons
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

CreateSearchForm.propTypes = {
  createSearch: func,
  getSearchRequest: func,
  getSoftSkills: func,
  getTechSkills: func,
  match: object,
  history: object,
  searchRequest: object,
  toggleSnackbar: func,
  techSkills: array,
  softSkills: array,
  classes: object,
};

export default withStyles(styles)(CreateSearchForm);
