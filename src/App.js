import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './views/Layout';
import Dashboard from './views/Dashboard';
import Clients from './views/Clients';
import News from './views/News';
import Events from './views/Events';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/news" component={News} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
