const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true })


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.runPlanningScrape = functions.https.onRequest(async (req, res) => {
  const docRef = db.collection('planningApps').doc('alovelace');

  const dbRes = await docRef.set({
    first: 'Ada Again',
    last: 'Lovelace',
    born: 1815
  });
  res.send({stuff: 'this is the stuff', dbRes})
  return null
});