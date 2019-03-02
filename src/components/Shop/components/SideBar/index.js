import SideBar from './SideBar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import connect from 'react-redux/es/connect/connect';
import toggleSidebar from '../../actions/sidebar/toggleSidebar';

export default connect(
  (state) => ({
    isOpen: state.sidebar.isOpen
  }),
  { toggleSidebar }
)(withStyles(styles)(SideBar));