import React from 'react';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

const AddCountryForm = ({
  createCountry,
  history,
  toggleSnackbar,
}) => {
  const onSubmit = (values) => {
    createCountry(values, () => {
      toggleSnackbar(true, 'Pais agregado correctamente');
      history.push('/admin/countries');
    });
  };

  const cancel = () => {
    history.push('/admin/countries');
  };

  const fields = [{
    name: 'name',
    label: 'Nombre',
    size: 4,
  }, {
    name: 'code',
    label: 'Código',
    size: 4,
  }, {
    name: 'phonePrefix',
    label: 'Prefijo telefónico',
    size: 4,
  }];

  const validate = validateRequiredFields(['name', 'code', 'phonePrefix']);

  return (
    <div>
      <Link to="/admin/countries">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <h1>Agregar pais</h1>
      <Form
        form="AddCountryForm"
        mode="add"
        title="paises"
        goBackTo="/countries"
        onSubmit={onSubmit}
        cancel={cancel}
        fields={fields}
        validate={validate}
      />
    </div>
  );
};

AddCountryForm.propTypes = {
  createCountry: func,
  history: object,
  toggleSnackbar: func,
};

export default AddCountryForm;
