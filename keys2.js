
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
