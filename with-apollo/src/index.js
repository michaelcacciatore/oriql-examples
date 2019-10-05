import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider as OriqlProvider } from 'react-oriql';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Hello from './components/Hello';
import queries from './queries';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const Provider = ({ children }) => (
  <ApolloProvider client={client}>
    <OriqlProvider client={queries}>{children}</OriqlProvider>
  </ApolloProvider>
);

/**
 * Unlike redux, you don't want to connect your components until they are ready to be used
 * Unless they will share the same parameters that are passed into connect() each time
 */
const HelloComponent = connect({ instance: 'Hello' })(Hello);

/**
 * If you wish to use the "advanced" connectToApollo wrapper, uncomment out these lines and comment out lines 7 and 24
 */
// import Hello from './advanced/components/Hello';
// import connectToApollo from './advanced/connectToApollo';

// const HelloComponent = connectToApollo({instance: 'Hello'})(Hello)

const App = () => (
  <Provider>
    <HelloComponent />
  </Provider>
);

const container = document.querySelector('.container');

ReactDOM.render(<App />, container);