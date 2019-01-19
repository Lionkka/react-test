import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { store } from './store';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

const Redux = (props) => {
  return (
    <Provider store={store}>
      <UserInput/>
      <UserOutput />
    </Provider>
  );
};

export default Redux;

// function connect(map) {
//     return function(component) {
//         return map(component);
//     }
// }