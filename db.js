const CREDS  = require('./creds');
const DB_URL = "mongodb://" + CREDS.username + ":" + CREDS.password + "@ds253889.mlab.com:53889/todopd"

var mongoose = require('mongoose');
mongoose.connect(DB_URL, { useNewUrlParser: true });
