const functions = require('firebase-functions');
const admin = require('firebase-admin');
const scrapeManchester = require('./scrapers/manchester').default

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true })


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.runPlanningScrape = functions.https.onRequest(async (req, res) => {
  const docRef = db.collection('planningApps').doc('manc');

  const mancData = await scrapeManchester()
  const dbRes = await docRef.set({
    scrape: mancData,
  });
  res.send({dbRes})
  return null
});