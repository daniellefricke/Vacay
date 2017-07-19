import React, { Component } from 'react'
import './BlogShow.css'

class BlogShow extends Component {
  constructor(props){
    super(props)
    this.state = {
        blog: this.props.location.state.selectedBlog
    }
  }
  render() {
    return (
      <div className="eachBlogShow">
        <h2>{this.state.blog.title}</h2>
        <img src={this.state.blog.mainImage}></img>
        <div className="blogDetails">
        <p><b>Country: </b>{this.state.blog.country}</p>
        <p> <b>Date of Travel:</b> {this.state.blog.when}</p>
        <p> <b>Author: </b>{this.state.blog.traveler}</p>
        <p><b>Booking Info:</b> {this.state.blog.bookingInfo}</p>
        <p><b>Accommodations:</b> {this.state.blog.rentalInfo}</p>
        <p><b>Activities: </b>{this.state.blog.activityInfo}</p>
        <p><b>Food:</b> {this.state.blog.foodInfo}</p>
        <p><b>Etc...:</b> {this.state.blog.additionalInfo}</p>
      </div>
      </div>
    );
  }
}

export default BlogShow;
