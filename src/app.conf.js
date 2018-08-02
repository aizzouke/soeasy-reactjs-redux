import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import store from './store';
import Master from './routes/MasterPage';
import './static/style.less';

const app = document.getElementById('app');
const history = createHashHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Master} />
    </Router>
  </Provider>,
  app,
);
