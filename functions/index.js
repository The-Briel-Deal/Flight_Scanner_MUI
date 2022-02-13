// const functions = require("firebase-functions");
const axios = require("axios");
const secrets = require("../secrets.js");
const fs = require("fs");
const express = require("express");
const path = require("path");
const searchAddr = "https://tequila-api.kiwi.com/v2/search";
const app = express();
const firebase = require("firebase/app");
const database = require("firebase/database");
const initializeApp = firebase.initializeApp;
const getDatabase = database.getDatabase;
const get = database.get;
const ref = database.ref;
const push = database.push;
const cookieParser = require("cookie-parser");
const [apiKey, firebaseConfig] = secrets;

const fbapp = initializeApp(firebaseConfig);
const rtdb = getDatabase(fbapp);


app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(cookieParser());
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.post("/is_authenticated", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});

app.post("log_out", (req, res) => {
  res.clearCookie("auth");
});

// app.use(bodyParser.json())
/**
 * Converts the date to something a bit more readable.
 * @param {string} date The date you would like to put in (datetime format).
 * @return {string} The human readable string.
 */
function dateConverter(date) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return `${day}/${month}/${year}`;
}

app.post("/search", (req, res) => {
  // res.json({ requestBody: req.body });
  const query = req.body;
  const airportFrom = query.APFrom;
  const airportTo = query.APTo;
  const dateFrom = query.DateFrom;
  const dateTo = query.DateTo;

  console.log(query);
  axios.get(searchAddr, {
    headers: {
      apikey: apiKey,
    },
    params: {
      fly_from: airportFrom,
      fly_to: airportTo,
      date_from: dateConverter(dateFrom),
      date_to: dateConverter(dateTo),
      one_for_city: "1",
      curr: "USD",
    },
  })
      .then((resp) => {
        const responseObject = resp.data;
        const price = responseObject.data[0].price;
        const connections = (responseObject.data[0].route.length - 1);
        const leaves = responseObject.data[0].route[0].local_departure;
        const returns = responseObject.data[0].route[0].local_arrival;
        const link = responseObject.data[0].deep_link;
        res.send(JSON.stringify({
          price: price,
          connections: connections,
          leaves: leaves,
          returns: returns,
          link: link,
        }));
        fs.writeFile("flight.json", JSON.stringify(responseObject), (error) => {
          if (error) throw error;
        });
      });
});
app.post("/log_in", (req, res) => {
  const creds = req.body;
  // console.log(JSON.stringify(creds));
  // console.log(test_user === creds.eMail);
  // console.log(test_pass === creds.pWord);
  let dbCreds;
  get(ref(rtdb, "users/")).then((data) => {
    dbCreds = data.val();
    let returned = false;
    for (const user in dbCreds) {
      if (
        dbCreds[user].eMail === creds.eMail &&
                dbCreds[user].pWord === creds.pWord) {
        res.cookie("auth", "true");
        res.send({authenticated: "true"});
        returned = true;
        break;
      }
    }
    if (!returned) {
      res.send({authenticated: "false"});
    }
  });
});

app.post("/sign_up", (req, res) => {
  const creds = req.body;
  push(ref(rtdb, "users/"), creds);
  res.cookie("auth", "true");
  res.send({response: "success"});
});

app.post("/new_flight_notification", (req, res) => {
  const request = req.body.formContents;
  push(ref(rtdb, "notify/"), request);
  console.log(request);
});

app.listen(process.env.PORT || 3000);
