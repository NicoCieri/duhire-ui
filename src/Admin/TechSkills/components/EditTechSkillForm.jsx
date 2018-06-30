import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

class EditTechSkillForm extends Component {
  static propTypes = {
    techSkill: object,
    editTechSkill: func,
    getTechSkill: func,
    history: object,
    match: object,
    toggleSnackbar: func,
  };

  componentDidMount() {
    const { getTechSkill, match } = this.props;
    getTechSkill(match.params.id);
  }

  onSubmit = (values) => {
    const { editTechSkill, history, toggleSnackbar } = this.props;
    editTechSkill(values, () => {
      toggleSnackbar(true, 'Tech skill editada correctamente');
      history.push('/admin/tech-skills');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/tech-skills');
  };

  fields = [{
    name: 'name',
    label: 'Nombre',
    size: 4,
  }, {
    name: 'description',
    label: 'Descripción',
    size: 8,
  }];

  validate = validateRequiredFields(['name', 'description']);

  render() {
    const { techSkill } = this.props;
    return (
      <div>
        <Link to="/admin/tech-skills">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <h1>Editar Tech Skill</h1>
        <Form
          form="EditTechSkillForm"
          mode="edit"
          onSubmit={this.onSubmit}
          cancel={this.cancel}
          initialValues={techSkill}
          fields={this.fields}
          validate={this.validate}
        />
      </div>
    );
  }
}

export default EditTechSkillForm;
