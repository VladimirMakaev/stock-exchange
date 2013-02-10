/// <reference path="definitions/node.d.ts" />
/// <reference path="definitions/express.d.ts" />
/**
* Module dependencies.
*/
var express = require("express")
var routes = require("./routes/index")
var user = require('./routes/user')

var path = require('path')
var app = express.createServer();
var port = process.env.PORT || 3000;
app.configure(function () {
    app.set('port', port);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));
});
app.configure('development', function () {
    app.use(express.errorHandler());
});
app.get('/', routes.index);
app.get('/users', user.list);
app.listen(port, function () {
    console.log("Demo Express server listening on port %d in %s mode", port, app.settings.env);
});
exports.App = app;
