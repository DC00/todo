var express = require('express'),
    config = require('./config'),
    port = process.env.port || config.PORT,
    app = require('./app');

const CREDS = require('./creds');
const DB_URL = "mongodb://" + CREDS.username + ":" + CREDS.password + "@ds253889.mlab.com:53889/todopd"

var server = app.listen(port, function() {
  console.log("magic on port ", config.PORT);
})
