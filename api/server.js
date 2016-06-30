'use strict';

var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
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
