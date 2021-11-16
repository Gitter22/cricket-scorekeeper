import React from 'react'

import Navbar from './components/Header/NavBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Players from './pages/Players';
import MatchCenter from './pages/MatchCenter'
import MatchSummary from './components/Matches/MatchSummary';
import NewMatchForm from './components/Matches/NewMatchForm';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/matches" component={Matches} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/matchcenter" component={MatchCenter} />
        <Route exact path='/matches/new'><NewMatchForm /></Route>
        <Route exact path="/matches/:matchId"><MatchSummary /></Route>
        <Route exact path="/matchcenter/:matchId"><MatchCenter /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
