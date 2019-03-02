import ItemActions from './ItemActions';
import { connect } from 'react-redux';
import addToBasket from '../../../actions/basket/addToBasket';

export default connect(
  (state) => ({
    basket: state.basket
  }),
  { addToBasket }
)(ItemActions);