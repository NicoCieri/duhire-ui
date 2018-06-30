import React, { Component } from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table from '../../../shared/components/Table';
import InfoMessage from '../../../shared/components/InfoMessage';
import Confirm from '../../../shared/components/Confirm';

const styles = theme => ({
  link: {
    textDecoration: 'none',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  loadingWrapper: {
    width: '100%',
    display: 'flex',
    padding: '60px 0px',
  },
  loading: {
    margin: '0px auto',
  },
});

const columns = [{
  header: 'Nombre',
  accessor: 'name',
}];

class CompanySizes extends Component {
  static propTypes = {
    companySizes: array,
    getCompanySizes: func,
    history: object,
    deleteCompanySize: func,
    showSnackbar: bool,
    snackbarMessage: string,
    toggleSnackbar: func,
    isLoading: bool,
  }

  state = {
    showDeleteModal: false,
  };

  componentDidMount() {
    this.props.getCompanySizes();
  }

  editCompanySize = (id) => {
    const { history } = this.props;
    history.push(`/admin/company-sizes/edit/${id}`);
  }

  removeCompanySize = (id) => {
    const { deleteCompanySize, toggleSnackbar } = this.props;
    deleteCompanySize(id, () => toggleSnackbar(true, 'CompanySize borrada correctamente'));
    this.closeDeleteModal();
  };

  handleSnackbarClose = () => {
    const { toggleSnackbar } = this.props;
    toggleSnackbar(false);
  }

  confirmDelete = (id) => {
    this.setState({
      showDeleteModal: true,
      companySizeToDelete: id,
    });
  }

  closeDeleteModal = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal,
    });
  };

  render() {
    const {
      showDeleteModal,
      companySizeToDelete,
    } = this.state;
    const {
      companySizes,
      showSnackbar,
      snackbarMessage,
      isLoading,
    } = this.props;
    return (
      <div>
        <h1>Tamaños de empresas</h1>
        <Table
          columns={columns}
          data={companySizes}
          isLoading={isLoading}
        />
        <InfoMessage
          open={showSnackbar}
          onClose={this.handleSnackbarClose}
          message={snackbarMessage}
        />
        <Confirm
          open={showDeleteModal}
          handleClose={this.closeDeleteModal}
          handleConfirm={() => this.removeCompanySize(companySizeToDelete)}
          title="Seguro deseas eliminarlo?"
          text="Esta acción no se puede deshacer."
          confirmText="Eliminar"
        />
      </div>
    );
  }
}

export default withStyles(styles)(CompanySizes);
