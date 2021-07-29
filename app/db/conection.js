const firebase = require("firebase-admin");
const serviceAccount = require('../../serviceAccount.json')
const collection = process.env.COLLECTION;

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: process.env.DBURL
});

const database = firebase.firestore();
const ref = database.collection(collection);

module.exports = ref