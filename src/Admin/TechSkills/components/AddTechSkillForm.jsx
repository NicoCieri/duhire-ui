import React from 'react';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

const AddTechSkillForm = ({
  createTechSkill,
  history,
  toggleSnackbar,
}) => {
  const onSubmit = (values) => {
    createTechSkill(values, () => {
      toggleSnackbar(true, 'TechSkill agregada correctamente');
      history.push('/admin/tech-skills');
    });
  };

  const cancel = () => {
    history.push('/admin/tech-skills');
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
      <Link to="/admin/tech-skills">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <h1>Agregar Tech Skill</h1>
      <Form
        form="AddTechSkillForm"
        mode="add"
        fields={fields}
        onSubmit={onSubmit}
        cancel={cancel}
        validate={validate}
      />
    </div>
  );
};

AddTechSkillForm.propTypes = {
  createTechSkill: func,
  history: object,
  toggleSnackbar: func,
};

export default AddTechSkillForm;
