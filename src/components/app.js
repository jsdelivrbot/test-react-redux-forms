import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Header from './header';

import CreateTeam from './create-team';
import CreatePlayer from './create-player';

const App = () => (
  <div className="app-wrapper">
    <Header />  
    <Switch>
      <Route path="/create-team" component={CreateTeam} />
      <Route path="/create-player" component={CreatePlayer} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
