import { connect } from 'react-redux';
import ItemActions from './ItemActions';

export default connect(
  (state) => ({
    shop: state.shop
  })
)(ItemActions);