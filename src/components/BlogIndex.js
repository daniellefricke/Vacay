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
        <main>
          <h2>Check out where our bloggers have been...</h2>
          <div className='blogContainer'>
            {blogs}
          </div>
        </main>
      </div>
    )
  }
}

export default BlogIndex;
