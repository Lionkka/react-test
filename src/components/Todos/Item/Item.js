import React from 'react';

export const Item = (props) => {
  return <li>{props.data.title}</li>;
};

export class ClassItem extends React.Component {
  constructor (props){
    super(props);
    this.state = {

    };

  }
  render () {
    return <li>{this.props.data}</li>;
  }
}

