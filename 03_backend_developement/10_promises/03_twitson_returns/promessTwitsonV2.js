const OAuth = require("oauth");
const fetch = require("node-fetch");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);
const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

function twitson(twitterUsername) {
  return new Promise(function (resolve, reject) {
    oauth.get(
      url + twitterUsername,
      process.env.TWITTER_ACCESS_TOKEN,
      process.env.TWITTER_ACCESS_SECRET,
      function (err, data) {
        if (err) return reject(err);
        const tweets = JSON.parse(data);
        function getText(element) {
          return element.text;
        }
        const texts = tweets.map(getText).join("\n\n");
        //console.log(texts);
        resolve(texts);
      });
  })
}

twitson("neiltyson").then(console.log);/*
  .then(watsonResult => {
    console.log("sentiments", watsonResult.sentiment);
    console.log("emotions", watsonResult.emotion);
  });
*/
