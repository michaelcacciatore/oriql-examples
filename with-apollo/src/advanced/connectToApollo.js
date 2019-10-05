import React from 'react';
import { connect } from 'react-oriql';
import { useQuery } from '@apollo/react-hooks';

const defaultComponent = () => null;

const connectToApollo = (
  connectConfig = {},
  {
    loading: LoadingComponent = defaultComponent,
    error: ErrorComponent = defaultComponent
  }
) => Component =>
  connect(connectConfig)(({ oriql: { query, component } }, ...props) => {
    const { loading, error, data, ...apollo } = useQuery(query);

    if (loading) {
      return <LoadingComponent />;
    }
    if (error) {
      return <ErrorComponent {...error} />;
    }

    return (
      <Component {...props} {...(data[component] || {})} apollo={apollo} />
    );
  });

export default connectToApollo;