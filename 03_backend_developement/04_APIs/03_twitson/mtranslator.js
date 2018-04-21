//source .env_var

const OAuth = require("oauth");
const request = require("request");


function translatorWatson(textToTranslate) {
  console.log(textToTranslate);

  const username = process.env.WATSON_USERNAME_TRANSLATOR;
  const password = process.env.WATSON_KEY_TRANSLATOR;
  const url = process.env.WATSON_URL_TRANSLATOR;

  const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
  const uri = encodeURI(url + "/v2/translate");

  request(
    { url: uri,
      method: "POST",
      headers: {
        "Authorization": auth,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      form: {
        text: textToTranslate,
        source: "en",
        target: "fr"
      }
    },
    function (error, response, result) {
      if (error || (response && response.statusCode != 200)) {
        console.log("ERROR API WATSON");
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      }
      console.log(JSON.parse(result));
      //console.log(JSON.parse(result).translations[0].translation);

    }
  );
}

//translatorWatson("La France et l’Allemagne apportent des réponses communes aux défis d’aujourd’hui. Nous travaillons sur la zone euro, les migrations, l’innovation et les grands dossiers internationaux.");
translatorWatson("I'm a cashier");
