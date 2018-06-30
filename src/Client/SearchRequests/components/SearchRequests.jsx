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
  header: 'ID',
  accessor: 'id',
}, {
  header: 'Puesto',
  accessor: 'name',
}, {
  header: 'Cantidad',
  accessor: 'quantity',
}, {
  header: 'Fecha',
  accessor: 'date',
}];

class SearchRequests extends Component {
  static propTypes = {
    classes: object,
    searchRequests: array,
    getSearchRequests: func,
    history: object,
    deleteSearchRequest: func,
    showSnackbar: bool,
    snackbarMessage: string,
    toggleSnackbar: func,
    isLoading: bool,
  }

  state = {
    showDeleteModal: false,
  };

  componentDidMount() {
    this.props.getSearchRequests();
  }

  viewSearchRequest = (id) => {
    const { history } = this.props;
    history.push(`/search-requests/${id}`);
  }

  removeSearchRequest = (id) => {
    const { deleteSearchRequest, toggleSnackbar } = this.props;
    deleteSearchRequest(id, () => toggleSnackbar(true, 'SearchRequest borrada correctamente'));
    this.closeDeleteModal();
  };

  handleSnackbarClose = () => {
    const { toggleSnackbar } = this.props;
    toggleSnackbar(false);
  }

  confirmDelete = (id) => {
    this.setState({
      showDeleteModal: true,
      searchRequestToDelete: id,
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
      searchRequestToDelete,
    } = this.state;
    const {
      searchRequests,
      classes,
      showSnackbar,
      snackbarMessage,
      isLoading,
    } = this.props;
    return (
      <div>
        <h1>Mis solicitudes de búsqueda</h1>
        <Link to="/search-requests/new" className={classes.link}>
          <Button raised color="primary" className={classes.button}>
            <AddIcon className={classes.leftIcon} /> Agregar
          </Button>
        </Link>
        <Table
          columns={columns}
          data={searchRequests}
          handleDelete={this.confirmDelete}
          handleView={this.viewSearchRequest}
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
          handleConfirm={() => this.removeSearchRequest(searchRequestToDelete)}
          title="Seguro deseas eliminarlo?"
          text="Esta acción no se puede deshacer."
          confirmText="Eliminar"
        />
      </div>
    );
  }
}

export default withStyles(styles)(SearchRequests);
