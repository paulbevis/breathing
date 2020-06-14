import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import BreatheUp from './screens/breathe-up'
import O2Tables from './screens/o2-tables'
import Co2Tables from './screens/co2-tables'
import Home from './screens/home'

const App = () => (
  <Router>
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route path={`/breathe-up`} component={BreatheUp} />
      <Route path={'/co2-tables'} component={Co2Tables} />
      <Route path={'/o2-tables'} component={O2Tables} />
    </Switch>
  </Router>
)

export default App
