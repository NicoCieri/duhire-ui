import React from 'react';
import { bool, func, string } from 'prop-types';
import { Button } from 'material-ui';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const Confirm = ({
  open,
  handleConfirm,
  handleClose,
  title = 'Seguro desea realizar esta acción?',
  text = '',
  cancelText = 'Cancelar',
  confirmText = 'Aceptar',
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {text}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="inherit">
        {cancelText}
      </Button>
      <Button onClick={handleConfirm} color="primary" autoFocus>
        {confirmText}
      </Button>
    </DialogActions>
  </Dialog>
);

Confirm.propTypes = {
  open: bool.isRequired,
  handleConfirm: func.isRequired,
  handleClose: func.isRequired,
  title: string,
  text: string,
  cancelText: string,
  confirmText: string,
};

export default Confirm;
