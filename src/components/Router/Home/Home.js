import React from 'react';
import { Prompt } from 'react-router';

export default () => (
  <div>
      Home Page
    <Prompt message='Are you sure you want to leave?' when={true}/>
  </div>
);