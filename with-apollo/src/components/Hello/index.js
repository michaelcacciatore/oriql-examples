import React from 'react';
import { useQuery } from '@apollo/react-hooks';

/**
 * There is a lot of boilerplate here (useQuery hook, check if loading or error, etc.) that can be cubersome
 * to write in every component.  You may also want your components to be more dumb about where their data comes from
 * and you might not want this logic in the component.
 * 
 * In this case, you can create you own wrapper around `connect` that can handle this for you
 * 
 * An example of this have been provided in the `advanced` directory.  The example uses a HOC but a hook should work just fine as well
 */
const Hello = ({ oriql: { query, component } }) => {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  const { compiler, framework } = data[component] || {};

  return (
    <h1>
      Hello from {compiler} and {framework}!
    </h1>
  );
};

Hello.displayName = 'Hello';

export default Hello;