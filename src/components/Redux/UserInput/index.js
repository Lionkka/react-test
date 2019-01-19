import { connect } from 'react-redux';
import UserInput from './UserInput';
import handleInputChange from '../actions/userInput/handleInputChange';

export default connect(
  null,
  {
    handleInputChange
  }
)(UserInput);