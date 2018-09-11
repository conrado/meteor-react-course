import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './header'
import BinsMain from './bins/bins_main'
import BinsList from './bins/bins_list'
import { Bins } from '../../imports/collections/bins'

export default () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BinsList} />
          <Route path="/bins/:binId" component={BinsMain} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
