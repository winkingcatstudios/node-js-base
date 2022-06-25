const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// Exposed on Github, but restricted in IP allow list
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://winkingcat:tabletopdontstop@winkingcattabletop.hp3zr.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
