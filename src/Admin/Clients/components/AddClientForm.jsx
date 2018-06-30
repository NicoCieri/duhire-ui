import React, { Component } from 'react';
import { array, func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields, toSelectFormat } from '../../../shared/utils/formUtils';

class AddClientForm extends Component {
  componentWillMount() {
    const { getSectors, getCompanySizes } = this.props;
    getSectors();
    getCompanySizes();
  }

  onSubmit = (values) => {
    const { createClient, toggleSnackbar, history } = this.props;
    const {
      companySize: { value: companySize },
      sectorId: { value: sectorId },
    } = values;
    const newValues = {
      ...values,
      companySize,
      sectorId,
    };
    createClient(newValues, () => {
      toggleSnackbar(true, 'Cliente agregado correctamente');
      history.push('/clients');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/clients');
  };

  render() {
    const {
      companySizes,
      sectors,
    } = this.props;

    const fields = [{
      name: 'name',
      label: 'Empresa',
      size: 4,
      required: true,
    }, {
      name: 'email',
      label: 'Email',
      size: 4,
      required: true,
    }, {
      name: 'companySize',
      label: 'Tamaño',
      size: 4,
      required: true,
      dropdown: true,
      options: companySizes.map(toSelectFormat),
    }, {
      name: 'fiscalId',
      label: 'CUIT',
      size: 4,
      required: true,
    }, {
      name: 'fiscalName',
      label: 'Razón social',
      size: 4,
      required: true,
    }, {
      name: 'sectorId',
      label: 'Sector',
      size: 4,
      dropdown: true,
      options: sectors.map(toSelectFormat),
      required: true,
    }, {
      name: 'contactName',
      label: 'Nombre de contacto',
      size: 4,
      required: true,
    }, {
      name: 'contactPosition',
      label: 'Posición de contacto',
      size: 4,
      required: true,
    }, {
      name: 'contactPhone',
      label: 'Teléfono de contacto',
      size: 4,
      required: true,
    }, {
      name: 'contactEmail',
      label: 'Email de contacto',
      size: 4,
      required: true,
    }];

    const requiredFields = fields.filter(({ required }) => required).map(({ name }) => name);
    const validate = validateRequiredFields(requiredFields);

    return (
      <div>
        <Link to="/admin/clients">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <h1>Agregar cliente</h1>
        <Form
          form="AddClientForm"
          mode="add"
          fields={fields}
          onSubmit={this.onSubmit}
          cancel={this.cancel}
          validate={validate}
        />
      </div>
    );
  }
}

AddClientForm.propTypes = {
  createClient: func,
  history: object,
  toggleSnackbar: func,
  sectors: array,
  getSectors: func,
  getCompanySizes: func,
  companySizes: array,
};

export default AddClientForm;
