import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* INTERFACE */
import { Layout } from './interface/layout/index'
/* PAGES */
// Home
import { Home } from './pages/home/index'
// Auth
import { Login } from './pages/auth/Login/index'
import { Signup } from './pages/auth/Signup/index'
import { Profile } from './pages/auth/Profile/index'
//Generator
import { CreateGame } from './pages/generator/create_game/index'
//Game View
import { GameView } from './pages/game_view/index'
//Boar View
import { BoardView } from './pages/board_view//index'
// LIB
import { withAuthentication } from '../lib/Authentication/withAuthentication'

// CONTEXTS

export const App = withAuthentication(() => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/createGame" exact component={CreateGame} />
          <Route path="/game/:share_url" exact component={GameView} />
          <Route path="/board/:title" exact component={BoardView} />
        </Switch>
      </Layout>
    </Router>
  )
})
