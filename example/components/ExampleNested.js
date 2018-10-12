import React from 'react';

function ExampleNested() {
  return <p>Hello from a nested loadable component!</p>;
}

function reducers() {
  return 'here we have loaded reducers';
}

function sagas() {
  return 'here we have loaded sagas';
}

export default {
  container: ExampleNested,
  reducers,
  sagas
};
