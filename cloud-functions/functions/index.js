const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true })

exports.notifyNewPlanningApps = functions.firestore
  .document('planningApps/{ref}')
  .onSet((change, context) => {
    const newValue = change.after.data();
    console.log(`Triggered on firebase. New data: ${JSON.stringify(newValue, null, 2)}`)
  });


exports.notifyUpdatedPlanningApps = functions.firestore
  .document('planningApps/{ref}')
  .onUpdate((change, context) => {
    const newValue = change.after.data();
    console.log(`Triggered on firebase. New data: ${JSON.stringify(newValue, null, 2)}`)
  });
