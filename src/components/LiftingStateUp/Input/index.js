import React from 'react';

export default (props) => {
  const { handleChange } = props;
  console.log({ props });

  return (
    <input onChange={handleChange}/>
  );
};