'use strict';

var Hapi = require('hapi');
var port = process.env.PORT || 3000

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    port: port
});

server.register(require('inert'), function() {

  // Add the route
  server.route({
      method: 'GET',
      path:'/{path*}',
      handler: {
        directory: {
          path: __dirname + '/../public',
          listing: false,
          index: true
        }
      }

  });

  // Start the server
  server.start(function(err) {

      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
  });

});
