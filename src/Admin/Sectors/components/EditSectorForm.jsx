import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

class EditSectorForm extends Component {
  static propTypes = {
    sector: object,
    editSector: func,
    getSector: func,
    history: object,
    match: object,
    toggleSnackbar: func,
  };

  componentDidMount() {
    const { getSector, match } = this.props;
    getSector(match.params.id);
  }

  onSubmit = (values) => {
    const { editSector, history, toggleSnackbar } = this.props;
    editSector(values, () => {
      toggleSnackbar(true, 'Sector editado correctamente');
      history.push('/admin/sectors');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/sectors');
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
    const { sector } = this.props;
    return (
      <div>
        <Link to="/admin/sectors">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <h1>Editar sector</h1>
        <Form
          form="EditSectorsForm"
          mode="edit"
          onSubmit={this.onSubmit}
          cancel={this.cancel}
          initialValues={sector}
          fields={this.fields}
          validate={this.validate}
        />
      </div>
    );
  }
}

export default EditSectorForm;
