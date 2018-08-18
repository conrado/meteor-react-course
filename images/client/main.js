import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import imgurConfig from './config/imgur';
import ImageList from './components/image_list';

const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
    headers: {
      Authorization: 'Client-ID ' + imgurConfig.clientId
    }
  }).then(response => console.log(response));

})
