import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'

class BinsMain extends Component {

  render() {
    console.log(this.props.match.params.binId)
    return (
      <div>BinsMain</div>
    )
  }
}

export default createContainer(() => {

}, BinsMain)
