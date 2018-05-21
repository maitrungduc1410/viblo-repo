/**
 * Created by dfurman on 1/22/16.
 */
/*
 This socket.io server listens to Redis for news from the channel wire
   then broadcasts it to all clients tuned into the channel in real time.
 In the real world, this would likely be behind a reverse proxy or something similar
   this would provide encryption, security and possibly authentication/authorization
   for the data coming across the wire.
 Another possibility would be to do the validation here in the node file
 */

//Setup the http server itself
var server = require('http').Server();

//Give socket.io access to the server object
var io = require('socket.io')(server);

//Setup the Node client for reading Redis
//ioredis was chosen for its performance benchmarks and data integrity metrics
var Redis = require('ioredis');
var redis = new Redis();

//Point the redis client at the channel established by the Laravel framework
redis.subscribe('chatroom');

/*
 When new data is pushed by Laravel into Redis, parse the data for any subscribed
   channels from json and broadcast the information on the socket.io channel for end clients
 */
redis.on('message', function(channel, message){
    //Initial proof of concept simply logging the message to the console as is
    //console.log('Message Received');
    //console.log(message);

    //Move the data into a JavaScript Object
    message = JSON.parse(message);

    //Broadcast socket.io syntax with the message data
    io.emit(channel + ':' + message.event, message.data);
})

//Tell the server on what port to listen
server.listen(3000);