import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { Provider }             from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store, { history }       from './store';
import { requireAuth }          from 'utilities/auth';
import App                      from 'containers/App';
import LogIn                    from 'containers/LogIn';
import Links                    from 'containers/Links';
import Secret                   from 'containers/Secret';
import Home                     from 'components/Home';
import About                    from 'components/About';

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router history={history}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/login" component={ LogIn } />
        <Route path="/links" component={ Links } />
        <Route path="/about" component={ About } />
        <Route path="/secret" component={ Secret } onEnter={requireAuth.bind(this, store)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
