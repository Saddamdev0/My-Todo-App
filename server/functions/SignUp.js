// const functions = require("firebase-functions");
import * as functions from "firebase-functions"
// const admin = require("firebase-admin");
import * as admin from "firebase-admin"
const cors = require("cors")({origin: true});
admin.initializeApp();
exports.SignUp = functions.https.onCall((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).json({error: "Method not allowed"});
    }

    const {email, password} = req.body;
    try {
      const userRecord = await admin
          .auth()
          .createUser({email, password});
      res.json({success: true, uid: userRecord.uid});
    } catch (err) {
      res.json({success: false, error: err.message});
    }
  });
});
