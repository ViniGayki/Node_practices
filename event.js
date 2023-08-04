var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a hello!');
}
var myEventHandlerscream = function () {
    console.log('I hear a scream!');
  }
  

//Assign the event handler to an event:
eventEmitter.on('call1', myEventHandler);
eventEmitter.on('call2', myEventHandlerscream);

//Fire the 'scream' event:
eventEmitter.emit('call2');