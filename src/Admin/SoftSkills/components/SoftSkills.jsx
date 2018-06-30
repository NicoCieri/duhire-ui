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

class SoftSkills extends Component {
  static propTypes = {
    classes: object,
    softSkills: array,
    getSoftSkills: func,
    history: object,
    deleteSoftSkill: func,
    showSnackbar: bool,
    snackbarMessage: string,
    toggleSnackbar: func,
    isLoading: bool,
  }

  state = {
    showDeleteModal: false,
  };

  componentDidMount() {
    this.props.getSoftSkills();
  }

  editSoftSkill = (id) => {
    const { history } = this.props;
    history.push(`/admin/soft-skills/edit/${id}`);
  }

  removeSoftSkill = (id) => {
    const { deleteSoftSkill, toggleSnackbar } = this.props;
    deleteSoftSkill(id, () => toggleSnackbar(true, 'Soft Skill borrada correctamente'));
    this.closeDeleteModal();
  };

  handleSnackbarClose = () => {
    const { toggleSnackbar } = this.props;
    toggleSnackbar(false);
  }

  confirmDelete = (id) => {
    this.setState({
      showDeleteModal: true,
      softSkillToDelete: id,
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
      softSkillToDelete,
    } = this.state;
    const {
      softSkills,
      classes,
      showSnackbar,
      snackbarMessage,
      isLoading,
    } = this.props;
    return (
      <div>
        <h1>Soft Skills</h1>
        <Link to="/admin/soft-skills/new" className={classes.link}>
          <Button raised color="primary" className={classes.button}>
            <AddIcon className={classes.leftIcon} /> Agregar
          </Button>
        </Link>
        <Table
          columns={columns}
          data={softSkills}
          handleDelete={this.confirmDelete}
          handleEdit={this.editSoftSkill}
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
          handleConfirm={() => this.removeSoftSkill(softSkillToDelete)}
          title="Seguro deseas eliminarlo?"
          text="Esta acción no se puede deshacer."
          confirmText="Eliminar"
        />
      </div>
    );
  }
}

export default withStyles(styles)(SoftSkills);
