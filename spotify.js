


var Spotify = require('node-spotify-api');
// var configtwit = require("./configtwit");
// var client = new Twitter(configtwit);


var spotify = new Spotify({
  id: "c4645856c24f420595a6490d61de999d",
  secret: "4983512e8a244b2ea5450cdf16728dd7",
  redirect_uri: "http://localhost:8888/callback" 
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }


 
console.log(data); 

});
module.exports = spotify;