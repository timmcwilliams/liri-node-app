//var keysModule = require("./keys.js");
var Twitter = require('twitter');
var fs =require("fs");
var request = require("request");
var command = process.argv[2];
var argument = process.argv[3];

runLiri();


function runLiri()
{
	switch(command) {
	    case "my-tweets":
	    	twitterCode();	    	  	
	        break;
	    case "spotify-this-song":
	        spottifyCode();
	        break;
	    case "movie-this":
	        movieCode();
	        break;
	    case "do-what-it-says":
	        doWhatItSays();
	        break;        
	    default:
	    	console.log("Please Enter a Valid Command");    
	}

}//END runLiri
//_______________________________________________________________________________________________________________________________-

function twitterCode(){
		
		var configtwit = require("./configtwit");
		var client = new Twitter(configtwit);
		var params = { 
			q: "Kona4403 since:2017-11-18", 
			count: 20
		};
		client.get("search/tweets", params, gotData);
		function gotData(err, data, response){
			console.log(data)
			var tweets = data.statuses;
			for(var i=0; i<tweets.length; i++)
				console.log(tweets[i].text);
		}//var client = new Twitter(keysModule.twitterKeys); 
			console.log("running twitter code");
}

//_____________________________________________________________________________________________________________________
function movieCode(){

// requests moved to top
	// var request = require("request");

	// default if user did not provide a movie
	if(argument === undefined)
	{
		argument = "Mr. Nobody";
	}	


	request("http://www.omdbapi.com/?t=" + argument + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

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
    
	

	console.log("running movie code. Movie:", argument);
}

// ___________________________________________________________________________________________________________________________
function spottifyCode(){

	// default if user did not provide a song
	if(argument === undefined)
	{
		argument = "The Sign";
	}	
	console.log("running spot code. Song:", argument);

	var Spotify = require('node-spotify-api');
// var configtwit = require("./configtwit");
// var client = new Twitter(configtwit);
		var spotify = new Spotify({
		  id: "c4645856c24f420595a6490d61de999d",
		  secret: "4983512e8a244b2ea5450cdf16728dd7",
		  redirect_uri: "http://localhost:8888/callback" 
		});
	
		spotify.search({ type: 'track', query: argument }, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		}
		console.log("Artist Name: " +data.tracks.items[0].album.artists[0].name);
		console.log("Album Name: " +data.tracks.items[0].album.name); 
		console.log("URL Name: " , data.tracks.items[0].album.external_urls.spotify);
		});
	
}
//____________________________________________________________________________________________________________________________

function doWhatItSays(){

	console.log("running doWhat");

	fs.readFile("random.txt", "utf8", function(err,data){
		
		// data is a string from our file.
		console.log("data:", data);

		// we split the string by ',' into an array.
		var arr = data.split(",");

		//from the array we get our command/argument
		command = arr[0];
		argument = arr[1];

		// we call runLiri again with our new command and argument from file
		runLiri();
	});
}