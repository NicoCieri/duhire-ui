import React from 'react';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

const AddSoftSkillForm = ({
  createSoftSkill,
  history,
  toggleSnackbar,
}) => {
  const onSubmit = (values) => {
    createSoftSkill(values, () => {
      toggleSnackbar(true, 'Soft Skill agregada correctamente');
      history.push('/admin/soft-skills');
    });
  };

  const cancel = () => {
    history.push('/admin/soft-skills');
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
      <Link to="/admin/soft-skills">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <h1>Agregar Soft Skill</h1>
      <Form
        form="AddSoftSkillForm"
        mode="add"
        fields={fields}
        onSubmit={onSubmit}
        cancel={cancel}
        validate={validate}
      />
    </div>
  );
};

AddSoftSkillForm.propTypes = {
  createSoftSkill: func,
  history: object,
  toggleSnackbar: func,
};

export default AddSoftSkillForm;
