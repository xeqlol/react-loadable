import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import delay from '../utils/delay';
import path from 'path';

const LoadableNested = Loadable({
  loader: ({ store, sagaMiddleware }) => {
    return import('./ExampleNested').then(module => {
      const { container, reducers, sagas } = module.default;
      store.replaceReducer(reducers());
      sagaMiddleware.run(sagas());
      return container;
    });
  },
  loading: Loading,
  loaderArgs: {
    store: { replaceReducer: message => console.log(message) },
    sagaMiddleware: { run: message => console.log(message) }
  }
});

export default function Example() {
  return (
    <div>
      <h1>Hello from a loadable component</h1>
      <LoadableNested />
    </div>
  );
}
