import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import imgurConfig from './config/imgur';
import ImageList from './components/image_list';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentWillMount () {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
      headers: {
        Authorization: 'Client-ID ' + imgurConfig.clientId
      }
    }).then( response => this.setState({ images: response.data.data }));
    // NEVER DO THIS:
    // this.state.images = [ {}, {} ]
  }

  render () {
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
})
