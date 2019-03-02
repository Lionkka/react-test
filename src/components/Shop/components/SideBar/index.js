import SideBar from './SideBar';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import connect from 'react-redux/es/connect/connect';
import toggleSidebar from '../../actions/sidebar/toggleSidebar';

const enhance = compose(
  connect(
    (state) => ({
      isOpen: state.sidebar.isOpen
    }),
    { toggleSidebar }
  ),
  withStyles(styles)
);

export default enhance(SideBar);