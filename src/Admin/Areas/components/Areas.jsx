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
  paper: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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

class Areas extends Component {
  static propTypes = {
    classes: object,
    areas: array,
    getAreas: func,
    history: object,
    deleteArea: func,
    showSnackbar: bool,
    snackbarMessage: string,
    toggleSnackbar: func,
    isLoading: bool,
  }

  state = {
    showDeleteModal: false,
  };

  componentDidMount() {
    this.props.getAreas();
  }

  editArea = (id) => {
    const { history } = this.props;
    history.push(`/admin/areas/edit/${id}`);
  }

  removeArea = (id) => {
    const { deleteArea, toggleSnackbar } = this.props;
    deleteArea(id, () => toggleSnackbar(true, 'Area borrada correctamente'));
    this.closeDeleteModal();
  };

  handleSnackbarClose = () => {
    const { toggleSnackbar } = this.props;
    toggleSnackbar(false);
  }

  confirmDelete = (id) => {
    this.setState({
      showDeleteModal: true,
      areaToDelete: id,
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
      areaToDelete,
    } = this.state;
    const {
      areas,
      classes,
      showSnackbar,
      snackbarMessage,
      isLoading,
    } = this.props;
    return (
      <div>
        <h1>Areas</h1>
        <Link to="/admin/areas/new" className={classes.link}>
          <Button raised color="primary" className={classes.button}>
            <AddIcon className={classes.leftIcon} /> Agregar
          </Button>
        </Link>
        <Table
          columns={columns}
          data={areas}
          handleDelete={this.confirmDelete}
          handleEdit={this.editArea}
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
          handleConfirm={() => this.removeArea(areaToDelete)}
          title="Seguro deseas eliminarlo?"
          text="Esta acción no se puede deshacer."
          confirmText="Eliminar"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Areas);
