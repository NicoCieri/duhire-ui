import React, { Component } from 'react';
import { array, object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields, toSelectFormat } from '../../../shared/utils/formUtils';

class EditClientForm extends Component {
  static propTypes = {
    client: object,
    companySizes: array,
    editClient: func,
    getClient: func,
    getSectors: func,
    getCompanySizes: func,
    history: object,
    match: object,
    sectors: array,
    toggleSnackbar: func,
  };

  componentDidMount() {
    const {
      getClient,
      getSectors,
      getCompanySizes,
      match,
    } = this.props;
    getClient(match.params.id);
    getSectors();
    getCompanySizes();
  }

  onSubmit = (values) => {
    const { editClient, history, toggleSnackbar } = this.props;
    const {
      companySize: { value: companySize },
      sectorId: { value: sectorId },
    } = values;
    const newValues = {
      ...values,
      companySize,
      sectorId,
    };
    editClient(newValues, () => {
      toggleSnackbar(true, 'Cliente editado correctamente');
      history.push('/admin/clients');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/clients');
  };

  validate = validateRequiredFields(['name', 'description']);

  render() {
    const { client, companySizes, sectors } = this.props;
    const selectedCompanySize = companySizes
      .map(toSelectFormat)
      .find(({ value }) => value === client.companySize);
    const selectedSector = sectors
      .map(toSelectFormat)
      .find(({ value }) => value === client.sectorId);

    const clientData = {
      ...client,
      companySize: selectedCompanySize,
      sectorId: selectedSector,
    };

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

    return (
      <div>
        <Link to="/admin/clients">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <h1>Editar cliente</h1>
        {client &&
          <Form
            form="EditClientsForm"
            mode="edit"
            onSubmit={this.onSubmit}
            cancel={this.cancel}
            initialValues={clientData}
            fields={fields}
            validate={this.validate}
          />
        }

      </div>
    );
  }
}

export default EditClientForm;
