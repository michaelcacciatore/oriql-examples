import React from 'react';

const Hello = ({ compiler, framework }) => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);

Hello.displayName = 'Hello';

export default Hello;
