import React from 'react';
import { object } from 'prop-types';
import { Avatar, Paper, Button } from 'material-ui';
// import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import deepOrange from 'material-ui/colors/deepOrange';
import deepPurple from 'material-ui/colors/deepPurple';
import { withStyles } from 'material-ui/styles';

// import GoBackLink from '../../../shared/components/GoBackLink';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: theme.spacing.unit * 2,
  }),
  title: {
    margin: '0 0 12px 0',
    fontSize: 28,
  },
  subtitle: {
    fontWeight: 'lighter',
    fontSize: 18,
    margin: 0,
    color: 'rgba(0,0,0,.6)',
  },
  contentTitle: {
    fontWeight: 'lighter',
    fontSize: 20,
    margin: 0,
    color: '#000',
  },
  publicated: {
    fontWeight: 'lighter',
    fontSize: 14,
    color: 'rgba(0,0,0,.6)',
  },
  text: {
    fontWeight: 'lighter',
  },
  avatar: {
    margin: 0,
    marginLeft: -10,
    fontWeight: 'normal',
  },
  orangeAvatar: {
    margin: 0,
    marginLeft: -10,
    color: '#fff',
    backgroundColor: deepOrange[500],
    fontWeight: 'normal',
  },
  purpleAvatar: {
    margin: 0,
    marginLeft: -10,
    color: '#fff',
    backgroundColor: deepPurple[500],
    fontWeight: 'normal',
  },
  avatarRow: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarText: {
    padding: '0 16px',
  },
  listTitle: {
    marginBottom: 0,
  },
});

const JobDetail = ({ classes }) => (
  <div>
    {/* <GoBackLink to="/" /> */}
    <Paper className={classes.paper}>
      <h1 className={classes.title}>Front End Developer SSr/Sr</h1>
      <h3 className={classes.subtitle}>Buenos Aires - Argentina</h3>
      <p className={classes.publicated}>Publicado: hace 1 semana</p>
      <Button raised color="primary" className={classes.button}>
        Call to action
      </Button>
    </Paper>

    <Paper className={classes.paper}>
      <div className={classes.avatarRow}>
        <div className={classes.avatarRow}>
          <Avatar className={classes.avatar}>H</Avatar>
          <Avatar className={classes.orangeAvatar}>N</Avatar>
          <Avatar className={classes.purpleAvatar}>OP</Avatar>
        </div>
        <div className={classes.avatarText}>
          <p>
            <strong>9 reclutadores</strong>
            {' ya están trabajando en tu búsqueda para conseguir los mejores profesionales.'}
          </p>
        </div>
      </div>
    </Paper>

    <Paper className={classes.paper}>
      <h4 className={classes.contentTitle}>Candidatos recibidos</h4>
    </Paper>
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} className={classes.listColumn}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>Location</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Select trip destination
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classes.column}>
              <Chip label="Barbados" className={classes.chip} onDelete={() => {}} />
            </div>
            <div className={`${classes.column} ${classes.helper}`}>
              <Typography variant="caption">
                Select your destination of choice<br />
                <a href="#sub-labels-and-columns" className={classes.link}>
                  Learn more
                </a>
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </Grid>
    </Grid>

    <Paper className={classes.paper}>
      <h4 className={classes.contentTitle}>Descripción del empleo</h4>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris molestie ullamcorper ultricies.
        Nunc augue tortor, egestas sed ultricies at, mollis et neque.
        Cras in eleifend tortor, eget mattis arcu. Duis sollicitudin sed augue a volutpat.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Curabitur tincidunt velit a suscipit vulputate.
        Sed quis tincidunt nisi, et luctus tellus.
        Ut auctor lorem ipsum, nec vulputate orci volutpat non.
        Pellentesque lorem massa, consequat in arcu vitae, lobortis varius turpis.
      </p>
      <p className={classes.text}>Curabitur eu nibh turpis.
        Etiam tristique mauris mi, ac ullamcorper nisi porttitor ac.
        Aenean id condimentum eros, a pellentesque sapien.
        In a ultrices diam. Nunc elementum ex felis, vitae facilisis justo venenatis ut.
        Etiam non iaculis augue.
        Proin rhoncus tortor ac eleifend dignissim.
        Sed cursus, elit vel efficitur consequat, leo orci blandit erat,
        ut porttitor elit erat vel justo.
      </p>
    </Paper>
  </div>
);


JobDetail.propTypes = {
  classes: object,
};

export default withStyles(styles)(JobDetail);
