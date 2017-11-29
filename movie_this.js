     
// var title = "gladiator";
// var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";
// console.log(queryURL);
  
 // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");


request("http://www.omdbapi.com/?t=gladiator&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

 
    console.log("The movie's title is: " + JSON.parse(body).Title);
    console.log("Year the movie came out: " + JSON.parse(body).Year);
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log("The movie's Rotten Tomatoes of the movie is: " + JSON.parse(body).Ratings[0].Value);
    console.log("Country where the movie was produced: " + JSON.parse(body).Country);
    console.log("Language of the movie: " + JSON.parse(body).Language);
    console.log("Plot of the movie: " + JSON.parse(body).Plot);
    console.log("Actors in the movie: " + JSON.parse(body).Actors);
  
  }
}); 
    
