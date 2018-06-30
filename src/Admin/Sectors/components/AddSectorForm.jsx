import React from 'react';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

const AddSectorForm = ({
  createSector,
  history,
  toggleSnackbar,
}) => {
  const onSubmit = (values) => {
    createSector(values, () => {
      toggleSnackbar(true, 'Sector agregado correctamente');
      history.push('/admin/sectors');
    });
  };

  const cancel = () => {
    history.push('/admin/sectors');
  };

  const fields = [{
    name: 'name',
    label: 'Nombre',
    size: 4,
  }, {
    name: 'description',
    label: 'Descripción',
    size: 8,
  }];

  const validate = validateRequiredFields(['name', 'description']);

  return (
    <div>
      <Link to="/admin/sectors">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <h1>Agregar sector</h1>
      <Form
        form="AddSectorForm"
        mode="add"
        fields={fields}
        onSubmit={onSubmit}
        cancel={cancel}
        validate={validate}
      />
    </div>
  );
};

AddSectorForm.propTypes = {
  createSector: func,
  history: object,
  toggleSnackbar: func,
};

export default AddSectorForm;
