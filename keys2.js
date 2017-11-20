
console.log('this is loaded');
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




//   consumer_key: 'yuYmzFbLNIe76QS5DY3F4emID',
//   consumer_secret: '09yyt0A6uToaBOAW52xc0GMcXvnJTpEGSrbglkrfXA8mfSWfTM',
//   access_token_key: '931019297996050435-W33p8coXWM6W1PlCyQMwkhpuPKQ0bBU',
//   access_token_secret: '4cwkI1lcJXY1ZKyCdeC35t33PIUpLrKR1htdNO5jKOEXu'
// });
// // count=0

// var params = {Kona4403: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);

     
//     // console.log("tweet: " + JSON.parse(tweets)user.text);
//   }

// });
// module.exports = client;