import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './views/Layout';
import Dashboard from './views/Dashboard';
import Clients from './views/Clients';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/clients" component={Clients} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
