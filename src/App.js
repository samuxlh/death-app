import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ProfilePage } from './pages/Profile';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/profile" exact component={ProfilePage} />
    </Switch>
  </BrowserRouter>
);

export default App;