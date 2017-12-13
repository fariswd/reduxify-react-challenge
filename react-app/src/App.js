import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import 'bulma/css/bulma.css';

import reducer from './reducer'

import TheNavBar from './TheNavBar'
import TheSideBar from './TheSideBar'
import Home from './Home'
import ImageShow from './Flick';
import Increment from './Increment'
import './App.css';


class App extends Component {
  constructor(props){
    super()

    this.state = {
      flick: []
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=ff6f56a15e5597b81579f5b38613cbad&user_id=spacex&per_page=20&format=json&nojsoncallback=1')
    .then(({ data })=>{
      let flickrPhoto = {
        type: 'GETFLICK',
        payload: data.photos.photo
      }
      reducer.photoStore.dispatch(flickrPhoto)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  componentWillMount(){
    this.getData()
  }

  render() {
    return (
      <Router>
        <div>
        <Route path="/" component={TheNavBar} />
          <div className="container head-fix">
            <div className="columns">
              <Route path="/" component={TheSideBar} />
              <Route exact path="/" component={Home} />
              <Route exact path="/increment" component={Increment} />
              <Route path="/flick/:farmid/:serverid/:id/:secret" component={ImageShow} message="hehehe"/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
