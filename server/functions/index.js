const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const {SignUp} = require("./SignUp");
exports.ping = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.json({message: "pong"});
  });
});
exports.SignUp = SignUp;
