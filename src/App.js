import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import BlogIndex from './components/BlogIndex.js'
import BlogShow from './components/BlogShow.js'
import About from './components/About.js'

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
                <nav>
                  <div className="nav-item"><Link to="/">Home</Link></div>
                  <div className="nav-item"><Link to="/about">About Vacay</Link></div>
                  <div className="nav-item"><Link to="/create">Create a Blog Post</Link></div>
                </nav>
              <div className="main">
            <Route exact path="/" render={() => <BlogIndex blogs={this.state.blogs} />} />
            <Route path="/about" component={About} />
          </div>
        </div>
          </Router>
      );
    }
  }

export default App;
