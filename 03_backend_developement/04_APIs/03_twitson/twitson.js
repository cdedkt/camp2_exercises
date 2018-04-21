const OAuth = require("oauth");
const request = require("request");

//source .env_varÒ

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

function getTweetPerUser(user, callback) {
  const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

  oauth.get(url + user, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET,
  function (error, data) {
    if (error) {
      console.log(error);
    } else {
      callback(JSON.parse(data));
    }
  });
}

function analyzeEmotion(textToAnalyze) {
  console.log(textToAnalyze);

  const username = process.env.WATSON_USERNAME;
  const password = process.env.WATSON_KEY;
  const url = process.env.WATSON_URL;

  const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=emotion&language=en&text=" + textToAnalyze);

  request(
    { url: uri,
      headers: { "Authorization": auth }
    },
    function (error, response, result) {
      if (error || (response && response.statusCode != 200)) {
        console.log("ERROR API WATSON");
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      }
      console.log(textToAnalyze + " => " + JSON.stringify(JSON.parse(result).emotion.document.emotion));
    }
  );
}

function displayTweets(tweets) {
  let nbTweet = 1;
  tweets.forEach(element => {
    console.log(nbTweet++ + " - " + element.text);
  })
}

function displayTweets2(tweets) {
  const texts = tweets.map(element => {
    return element.text;
  });
  texts.forEach(element => {
    console.log(element);
  });
}

function analyzeTweets(tweets) {
  let nbTweet = 1;
  tweets.forEach(element => {
    analyzeEmotion(nbTweet++ + " - " + element.text);
  })
}

function completeTweet(url) {
  request.get(url, (error, request, result) => {
    console.log(result);
  });

}

getTweetPerUser("EmmanuelMacron", displayTweets2);
//getTweetPerUser("EmmanuelMacron", analyzeTweets);
//analyzeEmotion("Nos prédécesseurs ont su résister à ce vent mauvais, c’est ce qui est attendu de nous.");
//completeTweet("https://t.co/G8pTqrXczg");
