import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import BlogIndex from './components/BlogIndex.js'
import BlogShow from './components/BlogShow.js'

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
                <nav className='navClass'>
                  <div className="nav-item"><Link to="/"><img src="./images/logo-short-short.png"></img></Link></div>
                  <div className="nav-item"><Link to="/create">Create a Blog Post</Link></div>
                </nav>

          <div className="main">
            <Route exact path="/" render={() => <BlogIndex blogs={this.state.blogs} />} />
            <Route path="/blogs/:id" component={BlogShow} />
          </div>
          <footer>
            <hr className="featurette-divider"/>
            <p>Vacay | 2017</p>
          </footer>
        </div>
          </Router>
      );
    }
  }

export default App;
