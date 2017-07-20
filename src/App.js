import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import BlogIndex from './components/BlogIndex.js'
import BlogShow from './components/BlogShow.js'
import BlogForm from './components/BlogForm.js'
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
      blogs: [],
      title: '',
      traveler: '',
      country: '',
      when: '',
      bookingInfo: '',
      activityInfo: '',
      rentalInfo: '',
      foodInfo: '',
      additionalInfo: '',
      mainImage: '',
      images: [],
      hasSubmitted: false,
      newBlog: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    axios.get(`http://localhost:4000/api/blogs`).then((response) => {
      console.log(response.data)
      this.setState({
        blogs: response.data
      })
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {title, traveler, country, when, bookingInfo, activityInfo, rentalInfo, foodInfo, additionalInfo, mainImage, images} = this.state;

    axios.post('http://localhost:4000/api/blogs', {title: title, traveler: traveler, country: country, when: when, bookingInfo: bookingInfo, activityInfo: activityInfo, rentalInfo: rentalInfo, foodInfo: foodInfo, additionalInfo: additionalInfo, mainImage: mainImage, images: images})
    .then((result)=>{
      console.log(result);
      this.setState({
        hasSubmitted: true,
        newBlog: result.data
      })
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className='navClass'>
            <div className="nav-item"><Link to="/"><img src="./images/logo-short-short.png" alt="Vacay Logo"></img></Link></div>
            {/* <div className="nav-item"><Link to="/create">Create a Blog Post</Link></div> */}

          </nav>

          <div className="main">
            <Route exact path="/" render={() => {
              return(
                <About />
              )
            }}
          />

          <Route exact path="/" render={() => {
            return(
              <BlogIndex handleChange={this.handleChange} handleSubmit={this.handleSubmit} blogs={this.state.blogs} />
            )
          }}
        />

        <Route exact path="/" render={() => {
          let newBlog = this.state.newBlog
          return this.state.hasSubmitted ? <Redirect to={{pathname: `/blogs/${this.state.newBlog.title}`, state: {selectedBlog: newBlog}}}/> : <BlogForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

        }}
      />

      <Route path="/blogs/:id" component={BlogShow} />
      <Route path="/create" component={BlogForm}/>
    </div>

    <footer>
      <hr className="featurette-divider"/>
      <div className="footerp">
      <p>Vacay | 2017</p>
    </div>
    </footer>
  </div>
</Router>
);
}
}

export default App;
