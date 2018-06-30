import React, { Component } from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';
import AddIcon from 'material-ui-icons/Add';
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
}, {
  header: 'Nombre de contacto',
  accessor: 'contactName',
}, {
  header: 'Email de contacto',
  accessor: 'contactEmail',
}];

class Clients extends Component {
  static propTypes = {
    classes: object,
    clients: array,
    getClients: func,
    history: object,
    deleteClient: func,
    showSnackbar: bool,
    snackbarMessage: string,
    toggleSnackbar: func,
    isLoading: bool,
  }

  state = {
    showDeleteModal: false,
  };

  componentDidMount() {
    this.props.getClients();
  }

  editClient = (id) => {
    const { history } = this.props;
    history.push(`/admin/clients/edit/${id}`);
  }

  removeClient = (id) => {
    const { deleteClient, toggleSnackbar } = this.props;
    deleteClient(id, () => toggleSnackbar(true, 'Client borrada correctamente'));
    this.closeDeleteModal();
  };

  handleSnackbarClose = () => {
    const { toggleSnackbar } = this.props;
    toggleSnackbar(false);
  }

  confirmDelete = (id) => {
    this.setState({
      showDeleteModal: true,
      clientToDelete: id,
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
      clientToDelete,
    } = this.state;
    const {
      clients,
      classes,
      showSnackbar,
      snackbarMessage,
      isLoading,
    } = this.props;
    return (
      <div>
        <h1>Clientes</h1>
        <Link to="/admin/clients/new" className={classes.link}>
          <Button raised color="primary" className={classes.button}>
            <AddIcon className={classes.leftIcon} /> Agregar
          </Button>
        </Link>
        <Table
          columns={columns}
          data={clients}
          handleDelete={this.confirmDelete}
          handleEdit={this.editClient}
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
          handleConfirm={() => this.removeClient(clientToDelete)}
          title="Seguro deseas eliminarlo?"
          text="Esta acción no se puede deshacer."
          confirmText="Eliminar"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Clients);
