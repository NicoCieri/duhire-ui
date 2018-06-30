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
  header: 'Nombre',
  accessor: 'name',
}, {
  header: 'Descripción',
  accessor: 'description',
}];

class Sectors extends Component {
  static propTypes = {
    classes: object,
    sectors: array,
    getSectors: func,
    history: object,
    deleteSector: func,
    showSnackbar: bool,
    snackbarMessage: string,
    toggleSnackbar: func,
    isLoading: bool,
  }

  state = {
    showDeleteModal: false,
  };

  componentDidMount() {
    this.props.getSectors();
  }

  editSector = (id) => {
    const { history } = this.props;
    history.push(`/admin/sectors/edit/${id}`);
  }

  removeSector = (id) => {
    const { deleteSector, toggleSnackbar } = this.props;
    deleteSector(id, () => toggleSnackbar(true, 'Sector borrado correctamente'));
    this.closeDeleteModal();
  };

  handleSnackbarClose = () => {
    const { toggleSnackbar } = this.props;
    toggleSnackbar(false);
  }

  confirmDelete = (id) => {
    this.setState({
      showDeleteModal: true,
      sectorToDelete: id,
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
      sectorToDelete,
    } = this.state;
    const {
      sectors,
      classes,
      showSnackbar,
      snackbarMessage,
      isLoading,
    } = this.props;
    return (
      <div>
        <h1>Sectores</h1>
        <Link to="/admin/sectors/new" className={classes.link}>
          <Button raised color="primary" className={classes.button}>
            <AddIcon className={classes.leftIcon} /> Agregar
          </Button>
        </Link>
        <Table
          columns={columns}
          data={sectors}
          handleDelete={this.confirmDelete}
          handleEdit={this.editSector}
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
          handleConfirm={() => this.removeSector(sectorToDelete)}
          title="Seguro deseas eliminarlo?"
          text="Esta acción no se puede deshacer."
          confirmText="Eliminar"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Sectors);
