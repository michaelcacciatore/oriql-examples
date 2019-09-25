import * as React from 'react';
import {PropTypes} from '../../types';

export default ({ compiler, framework }: PropTypes.Hello) => (
  <h1>Hello from {compiler} and {framework}!</h1>
);
