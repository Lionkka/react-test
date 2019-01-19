import React from 'react';

export default (props) => {
  console.log({
    userOutput: props
  });

  return (
    <div>{props.value}</div>
  );
};