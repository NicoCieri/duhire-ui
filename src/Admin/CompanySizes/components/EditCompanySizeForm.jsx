import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

class EditCompanySizeForm extends Component {
  static propTypes = {
    companySize: object,
    editCompanySize: func,
    getCompanySize: func,
    history: object,
    match: object,
    toggleSnackbar: func,
  };

  componentDidMount() {
    const { getCompanySize, match } = this.props;
    getCompanySize(match.params.id);
  }

  onSubmit = (values) => {
    const { editCompanySize, history, toggleSnackbar } = this.props;
    editCompanySize(values, () => {
      toggleSnackbar(true, 'CompanySize editada correctamente');
      history.push('/admin/company-sizes');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/company-sizes');
  };

  fields = [{
    name: 'name',
    label: 'Nombre',
    companySize: 4,
  }, {
    name: 'description',
    label: 'Descripción',
    companySize: 8,
  }];

  validate = validateRequiredFields(['name', 'description']);

  render() {
    const { companySize } = this.props;
    return (
      <div>
        <Link to="/admin/company-sizes">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <h1>Editar tamaño de empresa</h1>
        <Form
          form="EditCompanySizesForm"
          mode="edit"
          onSubmit={this.onSubmit}
          cancel={this.cancel}
          initialValues={companySize}
          fields={this.fields}
          validate={this.validate}
        />
      </div>
    );
  }
}

export default EditCompanySizeForm;
