import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './header'
import BinsMain from './bins/bins_main'
import BinsList from './bins/bins_list'
import { Bins } from '../../imports/collections/bins'

export default () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={BinsList} />
          <Route path="/bins/:binId" component={BinsMain} />
        </div>
      </Router>
    </div>
  )
}
