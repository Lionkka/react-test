import NavBar from './NavBar';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { connect } from 'react-redux';
import toggleSidebar from '../../actions/sidebar/toggleSidebar';

export default connect(
  null,
  { toggleSidebar }
)(withStyles(styles)(NavBar));