import React from 'react';
import { array, func, object } from 'prop-types';
import { Grid, Paper } from 'material-ui';
import { CardContent } from 'material-ui/Card';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { withStyles } from 'material-ui/styles';
import SearchIcon from 'material-ui-icons/Search';
import PersonIcon from 'material-ui-icons/Person';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import CheckIcon from 'material-ui-icons/Check';
import NoteAddIcon from 'material-ui-icons/NoteAdd';
import { Link } from 'react-router-dom';

import ColorCard from '../../shared/components/ColorCard';
import styles from './HomeStyles';

class Home extends React.Component {
  static propTypes = {
    getSearchRequests: func,
    classes: object,
    history: object,
    searchRequests: array,
  }

  state = {
    expanded: null,
  };

  componentDidMount() {
    this.props.getSearchRequests();
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  renderExpansionPanel = (id, title, status, description) => (
    <ExpansionPanel
      expanded={this.state.expanded === id}
      onChange={this.handleChange(id)}
      className={this.props.classes.expansionPanel}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={this.props.classes.heading}>{title}</Typography>
        <Typography className={this.props.classes.secondaryHeading}>{status}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {description}
        </Typography>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" color="primary">
          Ver detalle
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );

  renderSimplePanel = (id, title, status) => (
    <ExpansionPanel
      key={id}
      expanded={this.state.expanded === id}
      onClick={() => this.props.history.push(`/search-requests/${id}`)}
      className={this.props.classes.expansionPanel}
    >
      <ExpansionPanelSummary>
        <Typography className={this.props.classes.heading}>{title}</Typography>
        <Typography className={this.props.classes.secondaryHeading}>{status}</Typography>
      </ExpansionPanelSummary>
    </ExpansionPanel>
  );

  render() {
    // const { expanded } = this.state;
    const { classes } = this.props;

    const expansionPanelDescription = 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.';

    return (
      <div>
        <h1>Inicio</h1>

        <Grid
          container
          className={classes.container}
          justify="center"
          spacing={24}
        >
          <Grid item xs={6} md={3} >
            <ColorCard color="blue">
              <CardContent className={classes.cardContent}>
                <div className={classes.iconContent}>
                  <SearchIcon className={classes.icon} fontSize />
                </div>
                <div className={classes.itemContent}>
                  <h2 className={classes.itemNumber}>10</h2>
                  <h3 className={classes.itemTitle}>Búsquedas abiertas</h3>
                </div>
              </CardContent>
            </ColorCard>
          </Grid>
          <Grid item xs={6} md={3} >
            <ColorCard color="red">
              <CardContent className={classes.cardContent}>
                <div className={classes.iconContent}>
                  <CheckIcon className={classes.icon} fontSize />
                </div>
                <div className={classes.itemContent}>
                  <h2 className={classes.itemNumber}>15</h2>
                  <h3 className={classes.itemTitle}>Búsquedas cerradas</h3>
                </div>
              </CardContent>
            </ColorCard>
          </Grid>
          <Grid item xs={6} md={3} >
            <ColorCard color="yellow">
              <CardContent className={classes.cardContent}>
                <div className={classes.iconContent}>
                  <PersonIcon className={classes.icon} fontSize />
                </div>
                <div className={classes.itemContent}>
                  <h2 className={classes.itemNumber}>50</h2>
                  <h3 className={classes.itemTitle}>Candidatos recibidos</h3>
                </div>
              </CardContent>
            </ColorCard>
          </Grid>
          <Grid item xs={6} md={3} >
            <ColorCard color="green">
              <CardContent className={classes.cardContent}>
                <div className={classes.iconContent}>
                  <PersonAddIcon className={classes.icon} fontSize />
                </div>
                <div className={classes.itemContent}>
                  <h2 className={classes.itemNumber}>8</h2>
                  <h3 className={classes.itemTitle}>Candidatos contratados</h3>
                </div>
              </CardContent>
            </ColorCard>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.container}
          justify="flex-start"
          spacing={24}
        >
          <Grid item xs={12} md={7} >
            <div>
              <Paper className={classes.tableTitle}>
                <SearchIcon className={classes.tableTitleIcon} fontSize />
                <h4 className={classes.tableTitleText}>Mis búsquedas abiertas</h4>
                <a className={classes.link}>Ver todas</a>
              </Paper>
              {this.renderExpansionPanel('panel1', 'Java Semi Sr', 'Primera etapa', expansionPanelDescription)}
              {this.renderExpansionPanel('panel2', 'Javascript Ninja', 'Primera etapa', expansionPanelDescription)}
              {this.renderExpansionPanel('panel3', 'Cebador de mate junior', 'Tercera etapa', expansionPanelDescription)}
              {this.renderExpansionPanel('panel4', 'Java Semi Sr', 'Primera etapa', expansionPanelDescription)}
              {this.renderExpansionPanel('panel5', 'Javascript Ninja', 'Primera etapa', expansionPanelDescription)}
              {this.renderExpansionPanel('panel6', 'Cebador de mate junior', 'Tercera etapa', expansionPanelDescription)}
              {this.renderExpansionPanel('panel7', 'Java Semi Sr', 'Primera etapa', expansionPanelDescription)}
              {this.renderExpansionPanel('panel8', 'Javascript Ninja', 'Primera etapa', expansionPanelDescription)}
            </div>
          </Grid>
          <Grid item xs={12} md={5} >
            <div>
              <Paper className={classes.tableTitle}>
                <NoteAddIcon className={classes.tableTitleIcon} fontSize />
                <h4 className={classes.tableTitleText}>Mis solicitudes de búsqueda</h4>
                <Link to="/search-requests"><span className={classes.link}>Ver todas</span></Link>
              </Paper>
              {this.props.searchRequests.map(({ id, name, status }) =>
                this.renderSimplePanel(id, name, status))}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
