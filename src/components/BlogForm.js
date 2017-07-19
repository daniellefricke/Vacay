import React, {Component} from 'react'
import { Link } from "react-router-dom"


class BlogForm extends Component {
  render() {
    return(
      <div className='blogFormContainer'>
        <form onSubmit={this.props.handleSubmit}>
          <label>Title: <br></br><input type="text" name="title" onChange={this.props.handleChange} placeholder="Title goes here"/></label><br></br>
          <label>Country: <br></br><input type="text" name="country" onChange={this.props.handleChange} placeholder="Ex: Greece"/></label><br></br>
          <label>When did you do this trip?: <br></br><input type="text" name="traveler" onChange={this.props.handleChange} placeholder="Ex. Spring 2017"/></label><br></br>
          <label>Name: <br></br><input type="text" name="when" onChange={this.props.handleChange} placeholder="Your name here"/></label><br></br>
          <label>Booking info - tell us what websites and resources you used to book this. <br></br><input type="text" name="bookingInfo" onChange={this.props.handleChange} placeholder="Ex. Airfare was booked on..."/></label><br></br>
          <label>Activities and Excursions - tell us the awesome stuff you did! <br></br><input type="text" name="activityInfo" onChange={this.props.handleChange} placeholder="Ex. We ziplined through the Amazon!"/></label><br></br>
          <label>Accommodations - tell us about what to expect when you stay in this country. <br></br><input type="text" name="rentalInfo" onChange={this.props.handleChange} placeholder="Ex. The toilets spin the other way..."/></label><br></br>
          <label>Food! What are the best things you ate? <br></br><input type="text" name="foodInfo" onChange={this.props.handleChange} placeholder="Ex. The macaroons in Paris are to die for..."/></label><br></br>
          <label>Any last details - I'm sure you have more to tell us! <br></br><input type="text" name="additionalInfo" onChange={this.props.handleChange} placeholder="Ex. And don't forget..."/></label><br></br>
          <label>Main Image - give us a link to your favorite image from this trip! <br></br><input type="text" name="mainImage" onChange={this.props.handleChange} placeholder="https://www.myfaveimage.com"/></label><br></br>
          <label>Additional Images - load up to 5 pictures. Make sure to separate them by commas in this text box. <br></br><input type="text" name="images" onChange={this.props.handleChange} placeholder="https://www.myfaveimage.com, https://www.myfaveimage.com"/></label><br></br>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default BlogForm;


// title: String,
// traveler: String,
// country: String,
// when: String,
// bookingInfo: String,
// activityInfo: String,
// rentalInfo: String,
// foodInfo: String,
// additionalInfo: String,
// mainImage: String,
// images: [],
