import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from 'containers/DevTools';
import APIMiddleware from 'middleware/API';

import reducers from 'reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
