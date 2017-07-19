import React, {Component} from 'react'
import { Link } from "react-router-dom"
import './BlogIndex.css'

class BlogIndex extends Component {
  render() {
    let blogs = this.props.blogs.map((blog, i)=>{
      let pathname = `/blogs/${blog.title}`
      return(
        <div key={i}>
            <h2><Link to={{pathname, state: { selectedBlog: blog }}}> {blog.title}</Link></h2>
            <img src={blog.mainImage} alt="oops!"/>
          <p><b>Country:</b> {blog.country} | <b>Date of Travel: </b>{blog.when} | <b>Author:</b> {blog.traveler}</p>

        </div>
      )
    })
    return(
      <div>

        <div className='about'>
          <h2>Welcome to Vacay!</h2>
          <p>Vacay is a communal platform for the occassional travler. Don't have a blog but what to brag about an awesome vacation? This is the place! We've even templated the blog post to make it easy and ensure your blog post gives all the details to amazing your vacation story. </p>
        </div>

          <hr className="featurette-divider"/>

        <h2>Check out where are bloggers have been...</h2>
        <div className='blogcontainer'>
          {blogs}
        </div>
      </div>
    )
  }
}

export default BlogIndex;
