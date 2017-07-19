


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

var blog1 = new Blog({title: "Sayulita, Mexico - Tacos, Cerveza, and Surf!!!", traveler: "Danielle F.", country: "Mexico", when: "Spring 2017", bookingInfo:"Airfare was booked through Chase Rewards using the Chase Sapphire Reserve card. Casita was booked through AirBnB. I found the car service on Sayulitalife.com.", activityInfo: "We went on a day trip to the Marieta Island using a company in Sayulita called Alley Cat Boat Tours. This was amazing. We boarded a catamaran in the morning, the crew fished off the back and made fresh ceviche with their catch. They served breakfast and had great music. Upon arriving to the island, the crew took small groups to the island while others did paddle boarding and snorkling. On the way back, drinks and lunch was served. They also celebrated birthdays for those on board who had one. It was an awesome day. We also did a 2hr surf lesson through Lunazul. I'd recommend booking this a few days ahead and you can walk right into their shop by the beach to do this. ", rentalInfo:"We rented our casita through AirBnB. The unit was called Casa Bohemia and had 3 units in it. There was also a pool which was necessary after doing the climb to the unit up Gringo Hill.", foodInfo:"Tacos and beer! Plus Italian! And French! And Vegeterian! And Healthy! If you wanted it, you could get it in Sayulita. They have a pretty awesome downtown with tons of options. 6 tacos for $4, done! Pizza made by an Italian ex-pat, also done!", additionalInfo:"Sayulita is an amazing little town that offers a lot. If you want a chill surf town, this is absolutely the place for you.", mainImage: "https://flic.kr/p/WPWPb6", images:["https://flic.kr/p/WPWPb6", "https://flic.kr/p/WPWPuH", "https://flic.kr/p/WCezHZ", "https://flic.kr/p/WLg5SL"]})
var blog2 = new Blog({title: "Rome, Florence and Venice, Italy - So much pasta!!!", traveler: "Danielle F.", country: "Italy", when: "Fall 2016", bookingInfo:"We booked our airfare through chase rewards site using points and booked our rentals through AirBnB.", activityInfo: "The majority of our time was spent walking and seeing the sites. We did a wine and vintage Fiat tour which was amazing! They teach you to drive restored 1960's Fiat's and guide you through the Chianti region of Italy. Upon arriving back to the villa, you sit in the wine storage room and try local wine, cheese, meats, and olive oil. It was as amazing as it sounds.", rentalInfo:"We booked all of our units through AirBnB. In all locations we stayed in the inner cities so we had access to as much as possible.", foodInfo:"Pasta! In Rome you must get the cacio e pepe. Florence is known for their wild game filled plates and is where I had the best lasagna I've ever had. Venice = seafood! I swear I ate all of the little mermaid's friends in one pasta dish there.  And without a doubt, eat all the gelato you can!", additionalInfo:"Let it be known, you're going to walk your tush off in Rome. And make sure to go down random alleys in Venice - its fun to get lost in the nooks and cranies there.", mainImage: "https://flic.kr/p/WPWQog", images:["https://flic.kr/p/WPWQog", "https://flic.kr/p/WCez8k", "https://flic.kr/p/WCez4T", "https://flic.kr/p/WCez1B" ]})
var blog3 = new Blog({title: "Oktoberfest in Munich, Germnay, plus Stuttgart and Berlin.", traveler: "Danielle F.", country: "Germany", when: "Fall 2015", bookingInfo:"Airfare was booked through Chase Rewards using the Chase Sapphire Reserve card. Apartments were booked through AirBnB.", activityInfo: "We went to Oktoberfest in Munich first. If you go with a group, try to get a table reservation months in advance. Otherwise plan to drink early as the beer tents kick you out for the evening reservations around 5. Next we went to Stuttgart for Folkfest - a smaller Oktoberfest. While there we also went to the Mercedes Benz museum. We took a train to Berlin where we toured all of the capital's sites. We also were there for Germany's unification day. They were celebrating 25 years since East and West Berlin merged and Germany became a country as we know it now. So of course there was another festival. We took a bike tour of the city to hit as many sites as possible through Fat Tire Tours. I'd highy recommend them.", rentalInfo:"All of our rentals were booked through AirBnB and tended to be in the heart of the cities we visited. Be warned, most rentals were in walk ups so be ready to climb stairs!", foodInfo:"I'm not a huge fan of German food though the beer is amazing. Luckily, Germany has great Italian food. Stay away from the Chinese food joints, they are not what you'd expect compared to Chinese in the U.S.. Make sure to hit up the bakeries for breakfast of an 'apfeltasche' with a 'milch cafe'. And walk the sites with a pretzel!", additionalInfo:"Germany was a very charming country with tons to do. If you felt like partying, there was plenty of that. Enjoying a quiet afternoon in a beergarten is also a great option. If attending Oktoberfest, I highly recommend getting the local attire (trachten). Dirndls for women and leiderhosen for guys.", mainImage: "https://flic.kr/p/WCewbD", images:["https://flic.kr/p/WCewbD", "https://flic.kr/p/WLg83h", "https://flic.kr/p/WCexoZ", "https://flic.kr/p/WCew3n"]})

var comment1 = new Comment({comment:"That old Fiat is so cool!", name:"Steve K."})
var comment2 = new Comment({comment:"Your vacation looks awesome!", name:"Bethany F."})
var comment3 = new Comment({comment:"Das ist gut!", name:"Jordan R."})

var blogs = [blog1, blog2, blog3]
var comments = [comment1, comment2, comment3]

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
