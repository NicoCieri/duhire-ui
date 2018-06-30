import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

class EditAreaForm extends Component {
  static propTypes = {
    area: object,
    editArea: func,
    getArea: func,
    history: object,
    match: object,
    toggleSnackbar: func,
  };

  componentDidMount() {
    const { getArea, match } = this.props;
    getArea(match.params.id);
  }

  onSubmit = (values) => {
    const { editArea, history, toggleSnackbar } = this.props;
    editArea(values, () => {
      toggleSnackbar(true, 'Area editada correctamente');
      history.push('/admin/areas');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/areas');
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
    const { area } = this.props;
    return (
      <div>
        <Link to="/admin/areas">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <h1>Editar area</h1>
        <Form
          form="EditAreasForm"
          mode="edit"
          onSubmit={this.onSubmit}
          cancel={this.cancel}
          initialValues={area}
          fields={this.fields}
          validate={this.validate}
        />
      </div>
    );
  }
}

export default EditAreaForm;
