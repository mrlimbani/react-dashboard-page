import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Common from './components/common';

function appRoutes() {
  return (
      <BrowserRouter>
      <Switch>
          <Route exact path='/' view='Dashboard' component={Common} />
      </Switch>
      </BrowserRouter>
  )
}

export default appRoutes