import React from 'react';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

const AddCompanySizeForm = ({
  createCompanySize,
  history,
  toggleSnackbar,
}) => {
  const onSubmit = (values) => {
    createCompanySize(values, () => {
      toggleSnackbar(true, 'CompanySize agregada correctamente');
      history.push('/admin/company-sizes');
    });
  };

  const cancel = () => {
    history.push('/admin/company-sizes');
  };

  const fields = [{
    name: 'name',
    label: 'Nombre',
    companySize: 8,
  }];

  const validate = validateRequiredFields(['name', 'description']);

  return (
    <div>
      <Link to="/Admin/company-sizes">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <h1>Agregar tamaño de empresa</h1>
      <Form
        form="AddCompanySizeForm"
        mode="add"
        fields={fields}
        onSubmit={onSubmit}
        cancel={cancel}
        validate={validate}
      />
    </div>
  );
};

AddCompanySizeForm.propTypes = {
  createCompanySize: func,
  history: object,
  toggleSnackbar: func,
};

export default AddCompanySizeForm;
