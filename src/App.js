import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { getAuthUrl, getDashboardUrl} from './constants/routes/routes';
import Auth from './view/auth';
import Dashboard from './view/dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getAuthUrl()} component={Auth} />
          <Route path={getDashboardUrl()} component={Dashboard} />
          <Redirect to={getAuthUrl()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
