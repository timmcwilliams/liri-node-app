
// var Twitter = require('twitter-js-client').Twitter;
var Twitter = require('twitter');
var configtwit = require("./configtwit");
var client = new Twitter(configtwit);
var params = { 
	q: "Kona4403 since:2017-11-18", 
	count: 20
};
client.get("search/tweets", params, gotData);
function gotData(err, data, response){
	// console.log(data)
	var tweets = data.statuses;
	for(var i=0; i<tweets.length; i++)
		console.log(tweets[i].text);
}

var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });
// module.exports = spotify;
// spotify
// Client ID
// c4645856c24f420595a6490d61de999d
// Client Secret
// 4983512e8a244b2ea5450cdf16728dd7
