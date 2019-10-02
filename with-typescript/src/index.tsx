import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-oriql';

import oriql from '../oriql';
import Hello from './components/Hello';
import Query from './components/Query';

/**
 * Unlike redux, you don't want to connect your components until they are ready to be used
 * Unless they will share the same parameters that are passed into connect() each time
 */
const HelloComponent = connect({ instance: 'Hello', getQueryAsString: true })(
  Query(Hello)
);

const App = () => (
  <Provider client={oriql}>
    <HelloComponent />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById("example")
);