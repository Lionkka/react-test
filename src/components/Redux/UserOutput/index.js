import UserOutput from './UserOutput';
import { connect } from 'react-redux';

export default connect(
  (state) => ({
    value: state.userInput
  })
)(UserOutput);