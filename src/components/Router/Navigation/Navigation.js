import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.PureComponent {
  render() {
    console.log('render pure navigation');

    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    );
  }
}