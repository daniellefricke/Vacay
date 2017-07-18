var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/vacay');

var BlogSchema = new mongoose.Schema(
  {
    title: String,
    traveler: String,
    country: String,
    when: String,
    bookingInfo: String,
    activityInfo: String,
    rentalInfo: String,
    foodInfo: String,
    additionalInfo: String,
    images: []
  })

var CommentSchema = new mongoose.Schema(
  {
    comment: String,
    name: String,
    reviews: [BlogSchema]
  })

  mongoose.model("Blog", BlogSchema);
  mongoose.model("Comment", CommentSchema);






  // Now that we're connected, let's save that connection to the database in a variable.
  var db = mongoose.connection;

  // Will log an error if db can't connect to MongoDB
  db.on('error', err => {
    console.log(err);
  });

  // Will log "database has been connected" if it successfully connects.
  db.once('open', () => {
    console.log("database has been connected!");
  });





  module.exports = mongoose;
