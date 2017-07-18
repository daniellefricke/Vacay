import React, {Component} from 'react'
import { NavLink } from "react-router-dom"

class BlogIndex extends Component {

  render() {
    let blogs = this.props.blogs.map((blog, i)=>{
      return(
        <div>

          <h2 key={i}> <NavLink to='/blogs/:id'>{blog.title}</NavLink></h2>
          <p>Country: {blog.country}</p>
          <p>Date of Travel: {blog.when}</p>
          <p>Author: {blog.traveler}</p>
          <p>Booking Info: {blog.bookingInfo}</p>
          <p>Accommodations: {blog.rentalInfo}</p>
          <p>Activities: {blog.activityInfo}</p>
          <p>Food: {blog.foodInfo}</p>
          <p>Etc...: {blog.additionalInfo}</p>

        </div>
      )
    })
    return(
      <div>
        <h1>Check out where are bloggers have been...</h1>
          {blogs}
      </div>
    )
  }
}

export default BlogIndex;
