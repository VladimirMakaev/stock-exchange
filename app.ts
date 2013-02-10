/// <reference path="definitions/node.d.ts" />
/// <reference path="definitions/express.d.ts" />

/**
 * Module dependencies.
 */

import express = module("express");
import routes = module("./routes/index");
import user = module('./routes/user');
import http = module('http');
import path = module('path');

var app = express.createServer();

var port = <number> process.env.PORT || 3000;
app.configure(function(){
  app.set('port', port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

app.listen(port, function () {
    console.log("Demo Express server listening on port %d in %s mode", port, app.settings.env);
});

export var App = app;