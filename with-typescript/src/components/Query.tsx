import React, { useState } from 'react';
import useAsyncEffect from 'use-async-effect';

interface Props {
  oriql: {
    query: string,
    component: string,
  },
  props: Array<any>,
}

const Query = (Component: React.ComponentType<any>) => ({
  oriql: { component, query },
  ...props
}: Props) => {
  const [response, setResponse] = useState();

  useAsyncEffect(async () => {
    const request = await fetch("http://localhost:4000", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        operationName: null,
        variables: {}
      })
    });

    const response = await request.json();

    setResponse(response);
  }, []);

  if (response) {
    return <Component {...props} {...response.data[component]} />;
  }

  return null;
};

Query.displayName = 'Query';

export default Query;