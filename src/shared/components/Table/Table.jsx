import React from 'react';
import { array, bool, object, func } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Tooltip from 'material-ui/Tooltip';
import { LinearProgress } from 'material-ui/Progress';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import RemoveRedEyeIcon from 'material-ui-icons/RemoveRedEye';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  striped: {
    background: 'rgba(0,0,0,.03)',
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
    cursor: 'pointer',
  },
  actionCell: {
    width: '2em',
    padding: '4px 12px',
  },
  linearProgress: {
    transition: 'all .3s',
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
});

const SimpleTable = ({
  classes,
  columns,
  data,
  handleDelete,
  handleEdit,
  handleView,
  isLoading,
}) => {
  const renderHeader = (
    <TableRow>
      {columns && columns.map(({ header }, index) => (
        <TableCell key={index}>
          {header}
        </TableCell>
      ))}
      {handleEdit &&
        <TableCell className={classes.actionCell} />}
      {handleDelete &&
        <TableCell className={classes.actionCell} />}
    </TableRow>
  );

  const handleRowClick = id => (e) => {
    e.stopPropagation();
    if (handleView) {
      handleView(id);
    } else if (handleEdit) {
      handleEdit(id);
    }
  };

  const handleViewClick = id => (e) => {
    e.stopPropagation();
    handleView(id);
  };

  const handleEditClick = id => (e) => {
    e.stopPropagation();
    handleEdit(id);
  };

  const handleDeleteClick = id => (e) => {
    e.stopPropagation();
    handleDelete(id);
  };

  const renderBody = data && data.map((row, index) => {
    const output = (
      <TableRow
        key={row.id}
        className={index % 2 === 0 ? classes.striped : ''}
        onClick={handleRowClick(row.id)}
        style={{
          cursor: handleView || handleEdit ? 'pointer' : 'default',
        }}
      >
        {columns.map(({ accessor }) => (
          <TableCell key={accessor}>
            {row[accessor]}
          </TableCell>
        ))}

        {handleView && (
          <TableCell className={classes.actionCell}>
            <Tooltip title="Revisar" placement="top">
              <RemoveRedEyeIcon className={classes.icon} onClick={handleViewClick(row.id)} />
            </Tooltip>
          </TableCell>
        )}

        {handleEdit && (
          <TableCell className={classes.actionCell}>
            <Tooltip title="Editar" placement="top">
              <EditIcon className={classes.icon} onClick={handleEditClick(row.id)} />
            </Tooltip>
          </TableCell>
        )}

        {handleDelete && (
          <TableCell className={classes.actionCell}>
            <Tooltip title="Eliminar" placement="top">
              <DeleteIcon className={classes.icon} onClick={handleDeleteClick(row.id)} />
            </Tooltip>
          </TableCell>
        )}
      </TableRow>
    );
    return output;
  });
  const progressClasses = [
    classes.linearProgress,
    isLoading ? classes.show : classes.hide,
  ].join(' ');
  return (
    <div>
      <Paper className={classes.root}>
        <LinearProgress className={progressClasses} />
        <Table className={classes.table}>
          <TableHead>
            {renderHeader}
          </TableHead>
          <TableBody>
            {renderBody}
          </TableBody>
        </Table>

      </Paper>
    </div>
  );
};

SimpleTable.propTypes = {
  classes: object.isRequired,
  columns: array.isRequired,
  data: array.isRequired,
  handleDelete: func,
  handleEdit: func,
  handleView: func,
  isLoading: bool,
};

export default withStyles(styles)(SimpleTable);
