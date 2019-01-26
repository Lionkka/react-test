import { connect } from 'react-redux';
import ItemActions from './ItemActions';

import addToFavorites from '../../actions/shop/addToFavorites';

export default connect(
  (state) => ({
    shop: state.shop
  }),
  { addToFavorites }
)(ItemActions);