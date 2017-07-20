import React, {Component} from 'react'
import './About.css'

class About extends Component {
  render() {
    return(
      <div className='about'>
        <h2>Welcome to Vacay!</h2>
        <p>Vacay is a communal platform for the occassional travler. Don't have a blog but what to brag about an awesome vacation? This is the place! We've even templated the blog post to make it easy and ensure your blog post gives all the details to amazing your vacation story. Want to plan a trip? Search from all the blogs our travelers have posted to get advise from someone who had been there, done that... </p>
      <hr className="featurette-divider"/>
      </div>
    )
  }
}

export default About;
