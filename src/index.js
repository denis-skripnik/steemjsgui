import React from 'react';
import ReactDOM from 'react-dom';
import Api from './pages/Api';
import Method from './pages/ApiMethod';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import createBrowserHistory from "history/createBrowserHistory"

import "bootstrap/dist/css/bootstrap.css"
//import "bootstrap/dist/css/cerulean.css"

const history = createBrowserHistory({basename: 'viz'});

ReactDOM.render(
  <BrowserRouter history={history} basename={'viz'}>
  <Switch>
      <Route exact path="/" component={(props) => <Api {...props} />} />
      <Route exact path="/api" component={(props) => <Api {...props} />}/>
      <Route path="/api/:api_name/:method_name" component={(props) => <Method {...props} />}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
console.log("PUBLIC URL",process.env.PUBLIC_URL)

registerServiceWorker();
