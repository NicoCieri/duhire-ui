import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

class EditSoftSkillForm extends Component {
  static propTypes = {
    softSkill: object,
    editSoftSkill: func,
    getSoftSkill: func,
    history: object,
    match: object,
    toggleSnackbar: func,
  };

  componentDidMount() {
    const { getSoftSkill, match } = this.props;
    getSoftSkill(match.params.id);
  }

  onSubmit = (values) => {
    const { editSoftSkill, history, toggleSnackbar } = this.props;
    editSoftSkill(values, () => {
      toggleSnackbar(true, 'Soft skill editada correctamente');
      history.push('/admin/soft-skills');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/soft-skills');
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
    const { softSkill } = this.props;
    return (
      <div>
        <Link to="/admin/soft-skills">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <h1>Editar Soft Skill</h1>
        <Form
          form="EditSoftSkillForm"
          mode="edit"
          onSubmit={this.onSubmit}
          cancel={this.cancel}
          initialValues={softSkill}
          fields={this.fields}
          validate={this.validate}
        />
      </div>
    );
  }
}

export default EditSoftSkillForm;
