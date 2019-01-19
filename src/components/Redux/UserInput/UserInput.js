import React from 'react';

export default (props) => {
  console.log({
    inputProps: props
  });

  return (
    <input onChange={props.handleInputChange}/>
  );
};