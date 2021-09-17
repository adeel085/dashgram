import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />

      {/* Redirect Rules */}
      {/* <Redirect from="/" to="/login" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
