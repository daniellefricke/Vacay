


var mongoose = require("./schema");

var Comment = mongoose.model("Comment");
var Blog = mongoose.model("Blog");

Blog.remove({}, function(err){
  console.log(err?err:"")
});

Comment.remove({}, function(err){
  console.log("such remove");
  console.log(err)
});

var blog1 = new Blog({title: "Rome, Florence and Venice, Italy - So much pasta!!!", traveler: "Danielle F.", country: "Italy", when: "Fall 2016", bookingInfo:"lorem ipsum", activityInfo: "lorem ipsum", rentalInfo:"lorem ipsum", foodInfo:"lorem ipsum", additionalInfo:"lorem ipsum", images:["https://flic.kr/p/WPWPb6", "https://flic.kr/p/WPWPuH", "https://flic.kr/p/WCezHZ", "https://flic.kr/p/WLg5SL"]})
var blog2 = new Blog({title: "Sayulita, Mexico - Tacos, Cerveza, and Surf!!!", traveler: "Danielle F.", country: "Mexico", when: "Spring 2017", bookingInfo:"lorem ipsum", activityInfo: "lorem ipsum", rentalInfo:"lorem ipsum", foodInfo:"lorem ipsum", additionalInfo:"lorem ipsum", images:["https://flic.kr/p/WPWQog", "https://flic.kr/p/WCez8k", "https://flic.kr/p/WCez4T", "https://flic.kr/p/WCez1B" ]   })

var comment1 = new Comment({comment:"That old Fiat is so cool!", name:"Steve K."})
var comment2 = new Comment({comment:"Your vacation looks awesome!", name:"Bethany F."})

var blogs = [blog1, blog2]
var comments = [comment1, comment2]

// let successCount = 0
blogs.forEach((blog, i) => {
  blog.comments.push(comments[i], comments[i+1])
  // blog.save((err,blog) => {
  //   if (err){
  //     console.log(`err was ${err}`);
  //   } else {
  //     console.log("" + blog.title + " saved successfully. " + ++successCount + " saves thus far");
  //   }
  // })
})


Blog.remove({}).then(function(){
  Blog.collection.insert(blogs).then(function(res){
    console.log(res);
    process.exit();
  });
});

Comment.remove({}).then(function(){
  Comment.collection.insert(seedData).then(function(){
    process.exit();
  });
});
