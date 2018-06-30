const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    marginBottom: 12,
  },
  link: {
    color: theme.palette.primary.main,
  },
  paper: {
    width: '100%',
    padding: '20px 0px',
    margin: '20px 0px',
    boxSizing: 'border-box',
    flexGrow: 1,
    color: 'rgba(0, 0, 0, 0.70)',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    height: 150,
  },
  iconContent: {
    width: '50%',
    textAlign: 'center',
  },
  itemContent: {
    width: '50%',
    textAlign: 'right',
  },
  icon: {
    fontSize: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.18)',
    padding: 15,
    borderRadius: '50%',
  },
  itemNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'normal',
    margin: 0,
  },
  itemText: {
    fontSize: 12,
    marginBottom: 0,
  },
  colorCard: {
    background: 'linear-gradient(45deg, #0288d1 0%, #26c6da 100%)',
    color: '#FFF',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    height: 85,
  },
  cardActions: {
    color: '#FFF',
  },
  tableTitle: {
    padding: '20px 24px 20px 80px',
    position: 'relative',
  },
  tableTitleText: {
    margin: '0px 0px 4px',
  },
  tableTitleIcon: {
    fontSize: 28,
    backgroundColor: theme.palette.primary.main,
    padding: 8,
    borderRadius: '50%',
    color: '#FFF',
    position: 'absolute',
    left: 24,
    top: '50%',
    marginTop: '-22px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

export default styles;
