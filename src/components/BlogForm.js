import React, {Component} from 'react'

import './BlogForm.css'

class BlogForm extends Component {
  render() {
    return(
      <div>
        <aside>
          <h2>Tell us about your latest Vacay!</h2>
          <div className='blogFormContainer'>
            <form onSubmit={this.props.handleSubmit}>
              <label>Title: </label><br></br><input type="text" name="title" onChange={this.props.handleChange} placeholder="Title goes here"/><br></br>
              <label>Country: </label><br></br><input type="text" name="country" onChange={this.props.handleChange} placeholder="Ex: Greece"/><br></br>
              <label>When did you do this trip?: </label><br></br><input type="text" name="traveler" onChange={this.props.handleChange} placeholder="Ex. Spring 2017"/><br></br>
              <label>Name: </label><br></br><input type="text" name="when" onChange={this.props.handleChange} placeholder="Your name here"/><br></br>
              <label>Booking info - tell us what websites and resources you used to book this. </label><br></br><textarea type="text" name="bookingInfo" onChange={this.props.handleChange} placeholder="Ex. Airfare was booked on..."/><br></br>
              <label>Activities and Excursions - tell us the awesome stuff you did! </label><br></br><textarea type="text" name="activityInfo" onChange={this.props.handleChange} placeholder="Ex. We ziplined through the Amazon!"/><br></br>
              <label>Accommodations - tell us about what to expect when you stay in this country. </label><br></br><textarea type="text" name="rentalInfo" onChange={this.props.handleChange} placeholder="Ex. The toilets spin the other way..."/><br></br>
              <label>Food! What are the best things you ate? </label><br></br><textarea type="text" name="foodInfo" onChange={this.props.handleChange} placeholder="Ex. The macaroons in Paris are to die for..."/><br></br>
              <label>Any last details - I'm sure you have more to tell us! </label><br></br><textarea type="text" name="additionalInfo" onChange={this.props.handleChange} placeholder="Ex. And don't forget..."/><br></br>
              <label>Main Image - give us a link to your favorite image from this trip! </label><br></br><textarea type="text" name="mainImage" onChange={this.props.handleChange} placeholder="https://www.myfaveimage.com"/><br></br>
              <label className="large">Additional Images - load up to 5 pictures. Make sure to separate them by commas in this text box. </label><br></br><textarea type="text" name="images" onChange={this.props.handleChange} placeholder="https://www.myfaveimage.com, https://www.myfaveimage.com"/><br></br>
              <button type="submit"  value="Submit">Submit!</button>
            </form>
          </div>
        </aside>
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
