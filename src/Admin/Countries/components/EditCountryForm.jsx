import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { IconButton } from 'material-ui';
import Form from '../../../shared/components/Form';
import { validateRequiredFields } from '../../../shared/utils/formUtils';

class EditCountryForm extends Component {
  static propTypes = {
    country: object,
    editCountry: func,
    getCountry: func,
    history: object,
    match: object,
    toggleSnackbar: func,
  };

  componentDidMount() {
    const { getCountry, match } = this.props;
    getCountry(match.params.id);
  }

  onSubmit = (values) => {
    const { editCountry, history, toggleSnackbar } = this.props;
    editCountry(values, () => {
      toggleSnackbar(true, 'Pais editado correctamente');
      history.push('/admin/countries');
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/admin/countries');
  };

  fields = [{
    name: 'name',
    label: 'Nombre',
    size: 4,
    noEditable: true,
  }, {
    name: 'code',
    label: 'Código',
    size: 4,
  }, {
    name: 'phonePrefix',
    label: 'Prefijo telefónico',
    size: 4,
  }];

  validate = validateRequiredFields(['name', 'code', 'phonePrefix']);

  render() {
    const { country } = this.props;
    return (
      <div>
        <Link to="/admin/countries">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <h1>Editar pais</h1>
        <Form
          form="EditCountriesForm"
          mode="edit"
          goBackTo="/countries"
          onSubmit={this.onSubmit}
          cancel={this.cancel}
          initialValues={country}
          fields={this.fields}
          validate={this.validate}
        />
      </div>
    );
  }
}

export default EditCountryForm;
