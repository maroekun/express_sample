
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , expressValidator = require( 'express-validator');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  console.log(' configure ');
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use( expressValidator );
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

});

app.configure('development', function(){
  console.log(' configure : development ');
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(express.logger());
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Routes

app.get(  '/', routes.index);
app.get(  '/user/regist', routes.user.regist );
app.post( '/user/regist', routes.user.regist_post );
//app.put(  '/user/regist', routes.user.regist_put );

app.listen(3002, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
