var DeepStreamServer = require( 'deepstream.io' );
var connectionParams = require( './connection-params' );

// Setup the deepstream server
var server = new DeepStreamServer();
server.set('host', 'localhost');
server.set('port', 6020);

//Authentication and permissionHandler
server.set( 'permissionHandler', {
  isValidUser: function( connectionData, authData, callback ) {
    
    //User name needs to be specified
    if( !authData.username ) {
      callback( 'No username specified' );
    }
    //Password
    else if( authData.password !== 'jessepinkman' ) {
      callback( 'Wrong password' );
    }
    //All good
    else {
      callback( null, authData.username );
    }
  },
  canPerformAction: function( username, message, callback ) {
     // Allow everything as long as the client is logged in.
    callback( null, true );
  }
});


// Run the server
server.start();
