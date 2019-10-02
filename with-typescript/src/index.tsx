import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-oriql';

import Hello from './components/Hello';

const HelloComponent = connect()(Hello);

const App = () => (
  <Provider>
    <HelloComponent compiler="Oriql" framework="React" />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById("example")
);