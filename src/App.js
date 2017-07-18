import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'


class App extends Component{
constructor(props) {
  super(props)
  this.state = {
    blogs: []
}
}

componentDidMount(){
  axios.get(`http://localhost:4000/api/blogs`).then((response) => {
          console.log(response.data)
          this.setState({
            blogs: response.data
          })
        })
      }
      render() {
        return (
          <Router>
            <div>
              <h1>Hello World</h1>
            </div>
          </Router>
      );
    }
  }

export default App;
