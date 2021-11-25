import React, { useContext } from 'react'


import Navbar from './components/Header/NavBar';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Players from './pages/Players';
import Login from './pages/Login';
import MatchCenter from './pages/MatchCenter'
import MatchSummary from './components/Matches/MatchSummary';
import NewMatchForm from './components/Matches/NewMatchForm';
import AuthContext, { AuthContextProvider } from './store/auth-context';

function App() {

  const authCtx = useContext(AuthContext)
  console.log(authCtx)
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/matches">
            {authCtx.isLoggedIn && <Matches />}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route exact path="/players" component={Players} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/matchcenter" component={MatchCenter} />
          <Route exact path='/matches/new'><NewMatchForm /></Route>
          <Route exact path="/matches/:matchId"><MatchSummary /></Route>
          <Route exact path="/matchcenter/:matchId"><MatchCenter /></Route>
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
