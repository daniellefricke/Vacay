var mongoose = require("./connection");

var Blog = mongoose.model("Blog");
var Comment = mongoose.model("Comment");

Blog.remove({}, function(err){
  console.log(err)
});

Comment.remove({}, function(err){
  console.log(err)
});

var blog1 = new Post({title: "Rome, Florence and Venice, Italy - So much pasta!!!", traveler: "Danielle F.", country: "Italy", when: "Fall 2016", bookingInfo:"lorem ipsum", activityInfo: "lorem ipsum", rentalInfo:"lorem ipsum", foodInfo:"lorem ipsum", additionalInfo:"lorem ipsum", images:["https://flic.kr/p/WPWPb6", "https://flic.kr/p/WPWPuH", "https://flic.kr/p/WCezHZ", "https://flic.kr/p/WLg5SL", "https://flic.kr/p/WCezgM" ]})
var blog2 = new Post({title: "Sayulita, Mexico - Tacos, Cerveza, and Surf!!!", traveler: "Danielle F.", country: "Mexico", when: "Spring 2017", bookingInfo:"lorem ipsum", activityInfo: "lorem ipsum", rentalInfo:"lorem ipsum", foodInfo:"lorem ipsum", additionalInfo:"lorem ipsum", images:["https://flic.kr/p/WPWQog", "https://flic.kr/p/WCez8k", "https://flic.kr/p/WCez4T", "https://flic.kr/p/WCez1B", "https://flic.kr/p/WCeA7z" ]   })

var comment1 = new Comment({comment:"That old Fiat is so cool!", name:"Steve K."})
var comment1 = new Comment({comment:"Your vacation looks awesome!", name:"Bethany F."})

var blogs = [blog1, blog2]
var reviews = [comment1, comment2]

blogs.forEach((blog, i) => {
  blog.comments.push(comments[i], comments[i+1])
  blog.save((err,post) => {
    if (err){
      console.log(err)
    } else {
      console.log(post);
    }
  })
})
