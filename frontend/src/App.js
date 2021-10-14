import React from 'react'
import ScoreEntry from './components/ScoreEntry';
import ScoreCard from './components/ScoreCard';
import Navbar from './components/NavBar';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Players from './pages/Players';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/matches" component={Matches} />
        <Route exact path="/players" component={Players} />
      </Switch>
      {/* <ScoreCard />
      <ScoreEntry /> */}

    </BrowserRouter>
  );
}

export default App;
