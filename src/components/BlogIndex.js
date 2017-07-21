import React, {Component} from 'react'
import { Link } from "react-router-dom"
import './BlogIndex.css'
import BlogForm from './BlogForm.js'


class BlogIndex extends Component {

  constructor(props){
    super(props)
    console.log(props);
  }

  componentDidMount(){
    console.log("on mount");
    console.log(this.props);
    this.props.clearSubmit()
  }
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
        <BlogForm handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} clearSubmit={this.props.clearSubmit}/>
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
