import React from 'react'

import Navbar from './components/NavBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Players from './pages/Players';
import MatchCenter from './pages/MatchCenter'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/matches" component={Matches} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/matchcenter" component={MatchCenter} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
