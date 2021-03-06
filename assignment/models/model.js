//require mongoose and connect to database
var mongoose = require('mongoose');

// var connectionString = 'mongodb://localhost/cs5610';

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133856.mlab.com:33856/heroku_gdrfzfcv'; // use yours
}

// hw6: var connectionString = 'mongodb://admin:admin@ds133964.mlab.com:33964/heroku_1gbtpnhz';
var connectionString = 'mongodb://admin:admin@ds125565.mlab.com:25565/heroku_1v6hbq5v';

var db = mongoose.connect(connectionString, { userMongoClient: true });
module.exports = db;
