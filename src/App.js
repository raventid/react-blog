import React from 'react';
import ReactDOM from 'react-dom';
import { matchPath, Route} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import MainLayout from 'components/layouts/MainLayout';
import createRoutes from 'routes';
import store from 'store';
import { Provider } from 'react-redux';
import prepareData from 'helpers/prepareData';
import DevTools from 'containers/DevTools';

const history = createHistory();
const routes = createRoutes();

function historyPreparer(location) {
  routes.map(
    route => {
      const match = matchPath(location.pathname, route);
      if (match) {
        const state = { location, params: match.params, routes };
        return prepareData(store, state);
      }
    }
  );
  return true;
}

history.listen((location) => {
  historyPreparer(location);
});

historyPreparer(window.location);

const App = () => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <MainLayout>
            { routes.map(route => <Route {...route} /> ) }
          </MainLayout>
        </div>
      </ConnectedRouter>
    </Provider>
);

ReactDOM.render(
  <DevTools store={store}/>,
  document.getElementById('devtools')
);

export default App;
