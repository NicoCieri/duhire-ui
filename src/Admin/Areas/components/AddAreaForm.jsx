import React from 'react';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

const AddAreaForm = ({
  createArea,
  history,
  toggleSnackbar,
}) => {
  const onSubmit = (values) => {
    createArea(values, () => {
      toggleSnackbar(true, 'Area agregada correctamente');
      history.push('/admin/areas');
    });
  };

  const cancel = () => {
    history.push('/admin/areas');
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
      <Link to="/admin/areas">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <h1>Agregar areas</h1>
      <Form
        form="AddAreaForm"
        mode="add"
        fields={fields}
        onSubmit={onSubmit}
        cancel={cancel}
        validate={validate}
      />
    </div>
  );
};

AddAreaForm.propTypes = {
  createArea: func,
  history: object,
  toggleSnackbar: func,
};

export default AddAreaForm;
