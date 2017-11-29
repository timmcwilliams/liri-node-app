var Spotify = require('node-spotify-api');
// var configtwit = require("./configtwit");
// var client = new Twitter(configtwit);
var spotify = new Spotify({
  id: "c4645856c24f420595a6490d61de999d",
  secret: "4983512e8a244b2ea5450cdf16728dd7",
  redirect_uri: "http://localhost:8888/callback" 
});
var songQuery = "the sign";
spotify.search({ type: 'track', query: songQuery }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
}

console.log("Artist Name: " +data.tracks.items[0].album.artists[0].name);
console.log("Album Name: " +data.tracks.items[0].album.name); 
console.log("URL Name: " , data.tracks.items[0].album.external_urls.spotify);
});
// module.exports = spotify;


 //   * If no song is provided then your program will default to "The Sign" by Ace of Base.