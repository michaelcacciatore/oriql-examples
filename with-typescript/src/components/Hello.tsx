import React from 'react';
import {PropTypes} from '../../types';

const Hello = ({ compiler, framework }: PropTypes.Hello) => (
  <h1>Hello from {compiler} and {framework}!</h1>
);

Hello.displayName = 'HelloComponent';

export default Hello;
