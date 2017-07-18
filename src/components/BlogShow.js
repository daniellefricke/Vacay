import React, { Component } from 'react'

class BlogShow extends Component {
  constructor(props){
    super(props)
    this.state = {
        blog: this.state.selectedBlog
    }
  }
  render() {
    return (
      <div>
        <h1>BLOGSHOW</h1>
        <h2>{this.state.blog.title}</h2>
        <p>Country: {this.state.blog.country}</p>
        <p>Date of Travel: {this.state.blog.when}</p>
        <p>Author: {this.state.blog.traveler}</p>
        <p>Booking Info: {this.state.blog.bookingInfo}</p>
        <p>Accommodations: {this.state.blog.rentalInfo}</p>
        <p>Activities: {this.state.blog.activityInfo}</p>
        <p>Food: {this.state.blog.foodInfo}</p>
        <p>Etc...: {this.state.blog.additionalInfo}</p>

      </div>
    );
  }
}

export default BlogShow;
